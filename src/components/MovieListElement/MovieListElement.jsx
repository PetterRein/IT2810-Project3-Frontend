import React from 'react'
import { Route, Link } from 'react-router-dom';
import './MovieListElement.css'; 
import CommentSection from '../CommentSection'

export default function MovieListElement ({movieInfo}) {
  return (
	  <div className={'c3'}>
		  <div className={'movie page_box'}>
				  <div className={'box_header'}>
					  <h3 class="box_title">{ movieInfo.title }</h3>
				  </div>
				  <div className={'box_content'}>
					  <img className={'moviePoster'} src={'/images' + movieInfo.poster_path} alt={'Poster for ' + movieInfo.title}/>
					  <p>{ 'Score: ' + movieInfo.vote_average }</p>
					  <p>{ 'Release: ' + movieInfo.release_date.substring(0, 4) }</p>
				  </div>
		  </div>
	  </div>
  )
}
