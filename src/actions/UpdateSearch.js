import store from '../store/Store';
import getGraph from "./getMoviesGraph";
import { movieQueryFilter, movieQuerySorted } from './movieQuerys';

export default function UpdateSearch(payload) {
  const sortByField = store.getState().SortReducer.sortByField
  const sortFieldDirection = store.getState().SortReducer.sortFieldDirection
  const vote_average_limit = store.getState().SortReducer.vote_average
  if (sortFieldDirection && sortByField) {
    store.dispatch(getGraph(movieQuerySorted(sortByField, sortFieldDirection, vote_average_limit, payload)))
  }
  else {
    store.dispatch(getGraph(movieQueryFilter(vote_average_limit, payload)))
  }
  return { type: "UPDATE_SEARCH", payload }
};