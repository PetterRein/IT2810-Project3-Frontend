import store from '../store/Store';
import getGraph from "../utils/getMoviesGraph";
import { movieQueryFilter, movieQuerySorted } from '../utils/movieQuerys';

export default function UpdatePageNumber(payload) {
  const sortByField = store.getState().SortReducer.sortByField
  const sortFieldDirection = store.getState().SortReducer.sortFieldDirection
  const search = store.getState().SortReducer.search
  const vote_average_limit = store.getState().SortReducer.vote_average
  if (payload && sortFieldDirection && sortByField) {
    store.dispatch(getGraph(movieQuerySorted(sortByField, sortFieldDirection, vote_average_limit, search, payload * 6)))
  }
  else {
    store.dispatch(getGraph(movieQueryFilter(vote_average_limit, search, payload)))
  }
  return { type: "UPDATE_PAGE", payload }
};