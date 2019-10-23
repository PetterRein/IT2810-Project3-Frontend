const initialState = {
  sortByField: '',
  sortFieldDirection: '',
  vote_average: "0",
  search: ""
};

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
    default:
      return state;
  }
}

export default SortReducer;