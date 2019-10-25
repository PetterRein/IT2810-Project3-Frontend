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

function App (props) {
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
          <Link to="/" className="link">Home</Link>
          <Link to="/movieList" className="link">MovieList</Link>
          <Link to="/wordcloud" className="link">WordCloud</Link>
        </div>
	<Route exact path="/">
	<div className={'page_header'}>
		<h3>Velkommen til FilmDatabasen!</h3>
	</div>
	<div className="page_box">
		<div className="box_header">
			<h3>Valg</h3>
		</div>
		<div className="box_content">
			<Link to="/movieList" className="linkButtonSplit" >
				<div className="buttonsplit">
					Filmliste
				</div>
			</Link>
			<Link to="/wordcloud" className="linkButtonSplit" >
				<div className="buttonsplit">
					Ordsky
				</div>
			</Link>
		</div>
	</div>
	</Route>
        <Route path="/movieList" >
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
  };
};
export default connect(mapStateToProps)(App);
