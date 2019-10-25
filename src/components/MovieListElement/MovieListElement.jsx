import React from 'react'
import './MovieListElement.css'; 

// Lager et og et movie object
export default function MovieListElement ({movieInfo}) {
  return (
	  <div className={'c3'}>
		  <div className={'movie page_box'}>
				  <div className={'box_header'}>
					  <h3 className="box_title">{ movieInfo.title ? movieInfo.title : "loading"  }</h3>
				  </div>
				  <div className={'box_content'}>
					  <img className={'moviePoster'} src={process.env.REACT_APP_BASENAME + '/images' + movieInfo.poster_path} alt={'Poster for ' + movieInfo.title}/>
					  <p>{ 'Score: ' + movieInfo.vote_average }</p>
					  <p>{ 'Release: ' + movieInfo.release_date.substring(0, 4) }</p>
				  </div>
		  </div>
	  </div>
  )
}
