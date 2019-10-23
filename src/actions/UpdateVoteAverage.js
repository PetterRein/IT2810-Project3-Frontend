import store from '../store/Store';
import getGraph from "./getMoviesGraph";
import { movieQueryFilter, movieQuerySorted } from './movieQuerys';

export default function UpdateVoteAverage(payload) {
  const sortByField = store.getState().SortReducer.sortByField
  const sortFieldDirection = store.getState().SortReducer.sortFieldDirection
  const search = store.getState().SortReducer.search
  if (payload && sortFieldDirection && sortByField) {
    store.dispatch(getGraph(movieQuerySorted(sortByField, sortFieldDirection, payload, search)))
  }
  else {
    store.dispatch(getGraph(movieQueryFilter(payload, search)))
  }
  return { type: "UPDATE_VOTEAVERAGE", payload }
};