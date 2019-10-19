import React from 'react';
import './App.css';
import MoviePage from './components/MoviePage'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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
        <MoviePage movies={movies}/>
    </div>
  );
}

export default App;
