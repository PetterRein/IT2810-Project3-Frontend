import store from '../store/Store';
import getGraph from "./getMoviesGraph";
import { movieQuerySorted, movieQueryFilter } from './movieQuerys';

export default function UpdateSortDir(payload) {
  const sortByField = store.getState().SortReducer.sortByField
  const vote_average_limit = store.getState().SortReducer.vote_average
  const search = store.getState().SortReducer.search
  if (payload && sortByField) {
    store.dispatch(getGraph(movieQuerySorted(sortByField, payload, vote_average_limit, search)))
  }
  if (!payload && sortByField) {
    store.dispatch(getGraph(movieQueryFilter(vote_average_limit, search)))
  }
  return { type: "UPDATE_SORTDIRECTION", payload }
};