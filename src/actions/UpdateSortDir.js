import store from '../store/Store';
import getGraph from "./getMoviesGraph";
import { movieQuerySorted, movieQueryFilter, movieQuerySortedCount, movieQueryFilterCount } from './movieQuerys';
import UpdatePageNumber from './UpdatePageNumber';

export default function UpdateSortDir(payload) {
  const sortByField = store.getState().SortReducer.sortByField
  const vote_average_limit = store.getState().SortReducer.vote_average
  const search = store.getState().SortReducer.search
  const page = store.getState().SortReducer.page * 6
  store.dispatch(UpdatePageNumber(0));
  if (payload && sortByField) {
    store.dispatch(getGraph(movieQuerySortedCount(sortByField, payload, vote_average_limit, search)))
    store.dispatch(getGraph(movieQuerySorted(sortByField, payload, vote_average_limit, search, page)))
  }
  if (!payload && sortByField) {
    store.dispatch(getGraph(movieQueryFilterCount(vote_average_limit, search)))
    store.dispatch(getGraph(movieQueryFilter(vote_average_limit, search, page)))
  }
  return { type: "UPDATE_SORTDIRECTION", payload }
};