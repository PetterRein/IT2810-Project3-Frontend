import React from 'react'
import './Movie.css'; 

export default function Movie ({movieInfo}) {
  return (
	  <div className={'c3'}>
    <div className={'movie page_box'}>
	    <a href={ '/movie/' + movieInfo.id }>
	    <div className={'box_header'}>
			    <h3>{ movieInfo.title }</h3>
	    </div>
	    <div className={'box_content'}>
		    <img className={'moviePoster'} src={'/images' + movieInfo.poster_path} alt={'Movie: ' + movieInfo.title}/>
		    <p>{ 'Score: ' + movieInfo.vote_average }</p>
		    <p>{ 'Release: ' + movieInfo.release_date.substring(0, 4) }</p>
	    </div>
	    </a>
    </div>
    </div>
  )
}
