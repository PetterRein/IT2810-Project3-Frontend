import store from '../store/Store';
import getGraph from "../utils/getMoviesGraph";
import { movieQuerySorted, movieQueryFilter, movieQuerySortedCount, movieQueryFilterCount } from '../utils/movieQuerys';
import UpdatePageNumber from './UpdatePageNumber';

// Oppdatere hvilket felt du sortere på
export default function UpdateSortField(payload) {
  const sortFieldDirection = store.getState().SortReducer.sortFieldDirection
  const vote_average_limit = store.getState().SortReducer.vote_average
  const search = store.getState().SortReducer.search
  if (payload && sortFieldDirection) {
    store.dispatch(UpdatePageNumber(0));
    store.dispatch(getGraph(movieQuerySortedCount(payload, sortFieldDirection, vote_average_limit, search)))
    store.dispatch(getGraph(movieQuerySorted(payload, sortFieldDirection, vote_average_limit, search, 0)))
  }
  else if (!payload && sortFieldDirection) {
    store.dispatch(UpdatePageNumber(0));
    store.dispatch(getGraph(movieQueryFilterCount(vote_average_limit, search)))
    store.dispatch(getGraph(movieQueryFilter(vote_average_limit, search, 0)))
  }
  return { type: "UPDATE_SORTFIELD", payload }
};