const initialState = {
  sortByField: '',
  sortFieldDirection: '',
  vote_average: "0",
  search: "",
  page: 0
};

// Lagrer hva actions endere i state sånn at du kan hente det ut senere
function SortReducer(state = initialState, action) {
  switch(action.type) {
    case "UPDATE_SORTFIELD": {
      let field = action.payload;
      return {...state, sortByField: field }
    }
    case "UPDATE_SORTDIRECTION": {
      let direction = action.payload;
      return {...state, sortFieldDirection: direction}
    }
    case "UPDATE_VOTEAVERAGE": {
      let vote_average_limit = action.payload;
      return {...state, vote_average: vote_average_limit}
    }
    case "UPDATE_SEARCH": {
      let search = action.payload;
      return {...state, search: search}
    }
    case "UPDATE_PAGE": {
      let page = action.payload;
      return {...state, page: page}
    }
    default:
      return state;
  }
}

export default SortReducer;