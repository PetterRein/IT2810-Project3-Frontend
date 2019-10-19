import React from 'react'
import './Movie.css'; 

export default function Movie ({movieInfo}) {
  return (
    <div className={'movie'}>
      <a href={ '/movie/' + movieInfo.id }>
        <img className={'moviePoster'} src={'/images' + movieInfo.poster_path} alt={'Movie: ' + movieInfo.title}/>
        <p>{ movieInfo.title }</p>
        <p>{ 'Score: ' + movieInfo.vote_average }</p>
        <p>{ 'Release: ' + movieInfo.release_date.substring(0, 4) }</p>
      </a>
    </div>
  )
}