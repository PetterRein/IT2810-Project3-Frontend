import React from 'react'
import Movie from '../Movie/Movie'
import './MoviePage.css'

export default function MoviePage ({movies}) {
  const Movies = movies.map((movie, i) =>
    <Movie movieInfo={movie} key={i}/>
  );

  return (
    <div className={ 'row' }>
	  { Movies }
    </div>
  )
}
