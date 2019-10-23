import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import SortReducer from "../reducers/SortReducer";
import MoviesReducer from "../reducers/MoviesReducer";
import getGraph from "../actions/getMoviesGraph";


const rootReducer = combineReducers({
  //SortReducer,
  MoviesReducer,
})

const middlewareEnhancer = applyMiddleware(thunk)
const composedEnhancers = compose(
  middlewareEnhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const store = createStore(
  rootReducer,
  composedEnhancers,
);

const movieQuery = {
  query: `{
    movies {
      id
      title
      release_date
      poster_path
      vote_average
    }
  }`,
  variables: null
}

store.dispatch(getGraph(movieQuery))
export default store