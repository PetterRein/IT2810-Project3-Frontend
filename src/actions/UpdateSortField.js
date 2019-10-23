import store from '../store/Store';
import getGraph from "./getMoviesGraph";
import { movieQuerySorted, movieQueryFilter } from './movieQuerys';

export default function UpdateSortField(payload) {
  const sortFieldDirection = store.getState().SortReducer.sortFieldDirection
  const vote_average_limit = store.getState().SortReducer.vote_average
  const search = store.getState().SortReducer.search
  if (payload && sortFieldDirection) {
    store.dispatch(getGraph(movieQuerySorted(payload, sortFieldDirection, vote_average_limit, search)))
  }
  if (!payload && sortFieldDirection) {
    store.dispatch(getGraph(movieQueryFilter(vote_average_limit, search)))
  }
  return { type: "UPDATE_SORTFIELD", payload }
};