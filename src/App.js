import React from 'react';
import './App.css';
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const movieQuery = gql`
  {
    movies {
      id
      title
      release_date
      vote_average
      poster_path
    }
  }
`;


function App() {
  const { loading: loadingFilms, error: errorFilm, data: dataFilms } = useQuery(
    movieQuery
  );

  if (loadingFilms) return <p>Loading...</p>;
  if (errorFilm) return <p>There's an error: {errorFilm.message}</p>;

  const movies = dataFilms.movies
  return (
    <div className="App">
	  <Router basename={process.env.BASENAME}>
		  <div className="header_bar">
			  <Link to="/movieList" className="link">Home</Link>
		  </div>
		  <Route path="/movieList" >
			  <MovieList movies={movies}/>
		  </Route>
		  <Route path="/detail/:id" component={MovieDetail} >
		  </Route>
	  </Router>
    </div>
  );
}

export default App;
