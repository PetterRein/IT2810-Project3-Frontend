import React from 'react'
import './MovieListElement.css'; 
import { Link } from 'react-router-dom';

// Lager et og et movie object
export default function MovieListElement ({movieInfo}) {
  return (
	  <div className={'col3'}>
		  <div className={'movie page_box'}>
			  <Link to={`/detail/${movieInfo.id}`} key={movieInfo.id}>
				  <div className={'box_header'}>
					  <h3 className="box_title">{ movieInfo.title ? movieInfo.title : "loading"  }</h3>
				  </div>
				  <div className={'box_content'}>
					  <img className={'moviePoster'} src={process.env.REACT_APP_BASENAME + '/images' + movieInfo.poster_path} alt={'Poster for ' + movieInfo.title}/>
					  <p>{ 'Score: ' + movieInfo.vote_average }</p>
					  <p>{ 'Release: ' + movieInfo.release_date.substring(0, 4) }</p>
				  </div>
			  </Link>
		  </div>
	  </div>
  )
}
