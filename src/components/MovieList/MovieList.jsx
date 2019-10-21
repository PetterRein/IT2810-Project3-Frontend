import React from 'react'
import MovieListElement from '../MovieListElement'
import './MovieList.css'
import { Link } from 'react-router-dom';

export default function MovieList ({movies}) {
  const Movies = movies.map((movie, i) =>
	  <Link to={`/detail/${movie.id}`}><MovieListElement movieInfo={movie} key={i}/></Link>
  );

  return (
    <div className={ 'row' }>
	    <div class="page_header">
		    <h3>Filmliste</h3>
	    </div>
	    { Movies }
    </div>
  )
}
