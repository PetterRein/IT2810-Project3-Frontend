import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import SortReducer from "../reducers/SortReducer";
import MoviesReducer from "../reducers/MoviesReducer";
import getGraph from "../utils/getMoviesGraph";


const rootReducer = combineReducers({
  SortReducer,
  MoviesReducer,
})

const middlewareEnhancer = applyMiddleware(thunk)
const composedEnhancers = compose(
  middlewareEnhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
)

const store = createStore(
  rootReducer,
  composedEnhancers,
);

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

store.dispatch(getGraph(movieQuery))
store.dispatch(getGraph(numberOfMovies))
export default store