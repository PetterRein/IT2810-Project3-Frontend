import React from 'react'
import MovieListElement from '../MovieListElement'
import './MovieList.css'
import VoteAverageFilter from '../VoteAverageFilter.js/VoteAverageFilter';
import SearchField from '../SearchField/SearchField';
import PageSelector from '../PageSelector/PageSelector';
import SortQuerySelector from '../SortQuerySelector/SortQuerySelector'

// Lager en liste med filmer som vises på siden
export default function MovieList ({movies}) {
  let Movies = undefined
  if (movies) {
    Movies = movies.map((movie, i) =>
	    <MovieListElement movieInfo={movie}/>
    );
  }

  return (
  <div>
	  <div className="page_header">
		  <h3>Filmliste</h3>
	  </div>
	  <div class="page_box">
		  <div class="box_header">
			  <h3>Filtrering</h3>
		  </div>
		  <div class="box_content left-align">
			  <SortQuerySelector />
			  <VoteAverageFilter />
			  <SearchField />
		  </div>
	  </div>
	  <PageSelector />
	  <div className={ 'row' }>
		  { Movies ? Movies : <div>loading</div>}
	  </div>
	  <PageSelector />
    </div>
  )
}
