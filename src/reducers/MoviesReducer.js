const initialState = {
  fetching: false,
  movies: [],
  numberOfMovies: undefined,
  loaded: false
}

// Lagrer hva actions endere i state sånn at du kan hente det ut senere
export const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STARTING_REQUEST":{
      return {
        ...state,
        fetching: true
      }
    }
    case "FINISHED_REQUEST":{
      if(!!action.response.data.movies){
        return {
          ...state,
          fetching: false,
          movies: action.response.data.movies}
        }
      else {
        return {
          ...state,
          fetching: false,
          numberOfMovies: action.response.data.numberOfMovies
        }
      }
    }
    case "UPDATE_LOADED": {
      let loaded = action.payload
      return {
        ...state,
        loaded: loaded
      }
    }
    default:
      return state
  }
}

export default MoviesReducer;