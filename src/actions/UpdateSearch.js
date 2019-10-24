import store from '../store/Store';
import getGraph from "./getMoviesGraph";
import { movieQueryFilter, movieQuerySorted, movieQueryFilterCount, movieQuerySortedCount } from './movieQuerys';
import UpdatePageNumber from './UpdatePageNumber';

export default function UpdateSearch(payload) {
  const sortByField = store.getState().SortReducer.sortByField
  const sortFieldDirection = store.getState().SortReducer.sortFieldDirection
  const vote_average_limit = store.getState().SortReducer.vote_average
  const page = store.getState().SortReducer.page * 6
  store.dispatch(UpdatePageNumber(0));
  if (sortFieldDirection && sortByField) {
    store.dispatch(getGraph(movieQuerySortedCount(sortByField, sortFieldDirection, vote_average_limit, payload)))
    store.dispatch(getGraph(movieQuerySorted(sortByField, sortFieldDirection, vote_average_limit, payload, page)))
  }
  else {
    store.dispatch(getGraph(movieQueryFilterCount(vote_average_limit, payload)))
    store.dispatch(getGraph(movieQueryFilter(vote_average_limit, payload, page)))
  }
  return { type: "UPDATE_SEARCH", payload }
};