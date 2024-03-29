import React from 'react'
import { useParams } from 'react-router-dom';
import './MovieDetail.css'; 
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import CommentSection from '../CommentSection/CommentSection'

// Render detailene om en film på detail siden
export default function MovieDetail () {
	let params = useParams();

	const movieQuery = gql`
	  {
	    movie(id: "${params.id}") {
	      title
	      release_date
	      vote_average
				poster_path
				overview
	    }
	  }
	`;

	const { loading: loadingFilms, error: errorFilm, data: dataFilms } = useQuery(
		movieQuery
	);

	if (loadingFilms) return <p>Loading...</p>;
	if (errorFilm) return <p>There's an error: {errorFilm.message}</p>;

	const movie = dataFilms.movie
	return (
		<div className={'c6'}>
			<div className={'movie page_box'}>
				<div className={'box_header'}>
					<h3 className="box_title">{ movie.title }</h3>
				</div>
				<div className={'box_content'}>
					<img className={'moviePoster'} src={process.env.REACT_APP_BASENAME + '/images' + movie.poster_path} alt={'Poster: ' + movie.title}/>
					<p>{ 'Score: ' + movie.vote_average }</p>
					<p>{ 'Release: ' + movie.release_date }</p>
					<p>{ 'Overview: ' + movie.overview }</p>
				</div>
			</div>
			<CommentSection movie={params.id} />
		</div>
	)
}
