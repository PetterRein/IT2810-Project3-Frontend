const initialState = {
  fetching: false,
  movies: []
}

export const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STARTING_REQUEST":{
      return {fetching: true}
    }
    case "FINISHED_REQUEST":{
      return {fetching: false,
             movies: action.response.data.movies}
            }
    default:
      return state
  }
}

export default MoviesReducer;