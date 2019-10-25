import store from '../store/Store';
import getGraph from "../utils/getMoviesGraph";
import { movieQuerySorted, movieQueryFilter, movieQuerySortedCount, movieQueryFilterCount } from '../utils/movieQuerys';
import UpdatePageNumber from './UpdatePageNumber';

export default function UpdateSortDir(payload) {
  const sortByField = store.getState().SortReducer.sortByField
  const vote_average_limit = store.getState().SortReducer.vote_average
  const search = store.getState().SortReducer.search
  if (payload && sortByField) {
    store.dispatch(UpdatePageNumber(0));
    store.dispatch(getGraph(movieQuerySortedCount(sortByField, payload, vote_average_limit, search)))
    store.dispatch(getGraph(movieQuerySorted(sortByField, payload, vote_average_limit, search, 0)))
  }
  else if (!payload && sortByField) {
    store.dispatch(UpdatePageNumber(0));
    store.dispatch(getGraph(movieQueryFilterCount(vote_average_limit, search)))
    store.dispatch(getGraph(movieQueryFilter(vote_average_limit, search, 0)))
  }
  return { type: "UPDATE_SORTDIRECTION", payload }
};