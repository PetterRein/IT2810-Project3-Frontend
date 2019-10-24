import store from '../store/Store';
import getGraph from "./getMoviesGraph";
import { movieQueryFilter, movieQuerySorted, movieQueryFilterCount, movieQuerySortedCount } from './movieQuerys';
import UpdatePageNumber from './UpdatePageNumber';

export default function UpdateVoteAverage(payload) {
  const sortByField = store.getState().SortReducer.sortByField
  const sortFieldDirection = store.getState().SortReducer.sortFieldDirection
  const search = store.getState().SortReducer.search
  store.dispatch(UpdatePageNumber(0));
  if (payload && sortFieldDirection && sortByField) {
    store.dispatch(getGraph(movieQuerySortedCount(sortByField, sortFieldDirection, payload, search)))
    store.dispatch(getGraph(movieQuerySorted(sortByField, sortFieldDirection, payload, search, 0)))
  }
  else {
    store.dispatch(getGraph(movieQueryFilterCount(payload, search)))
    store.dispatch(getGraph(movieQueryFilter(payload, search, 0)))
  }
  return { type: "UPDATE_VOTEAVERAGE", payload }
};