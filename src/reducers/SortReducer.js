const initialState = {
  sortByField: '',
  sortFieldDirection: ''
};

function SortReducer(state = initialState, action) {
  switch(action.type) {
    case "UPDATE_SORTFIELD": {
      let field = action.payload;
      return {...state, sortByField: field }
    }
    default:
      return state;
  }
}

export default SortReducer;