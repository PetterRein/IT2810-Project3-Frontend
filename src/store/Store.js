import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import SortReducer from "../reducers/SortReducer";
import MoviesReducer from "../reducers/MoviesReducer";

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

export default store