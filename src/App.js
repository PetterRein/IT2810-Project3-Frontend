import React from 'react';
import './App.css';
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'
import SortQuerySelector from './components/SortQuerySelector'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import VoteAverageFilter from './components/VoteAverageFilter.js/VoteAverageFilter';
import SearchField from './components/SearchField';
import PageSelector from './components/PageSelector/PageSelector';
import ReactWordcloud from 'react-wordcloud'
import store from './store/Store';
import getGraph from './utils/getMoviesGraph';
import UpdateLoaded from './actions/UpdateLoaded';

function App (props) {
  // Laster noen filmer så vi har noe å starte med
  if(!props.loaded) {
    const movieQuery = {
      query: `{
        movies (first: 6, skip: 0){
          id
          title
          release_date
          poster_path
          vote_average
          overview
        }
      }`,
      variables: null
    }
    
    const numberOfMovies = {
      query: `{
        numberOfMovies
      }`,
      variables: null
    }
    store.dispatch(UpdateLoaded(true))
    store.dispatch(getGraph(movieQuery))
    store.dispatch(getGraph(numberOfMovies))
  }
  const words = []
  props.movies.map((movie) => 
    movie.overview.split(" ").map((word) =>
      words.push({
        text: word,
        value: 64
      })
    )
  )
  return ( 
      <div className="App">
      <Router basename={process.env.REACT_APP_BASENAME}>
        <div className="header_bar">
          <Link to="/movieList" className="link">Home</Link>
          <Link to="/wordcloud" className="link">WordCloud</Link>
        </div>
        <Route path="/">
          <Redirect to="/movieList"/>
        </Route>
        <Route path="/movieList" >
          <SortQuerySelector />
          <VoteAverageFilter />
          <SearchField />
          <PageSelector />
          <MovieList movies={props.movies}/>
        </Route>
        <Route path="/detail/:id" component={MovieDetail} >
        </Route>
        <Route path="/wordcloud">
          <ReactWordcloud words={words} />
        </Route>
      </Router>
      </div>
  );
}

const mapStateToProps = state => {
  return {
    movies: state.MoviesReducer.movies,
    loaded: state.MoviesReducer.loaded
  };
};
export default connect(mapStateToProps)(App);
