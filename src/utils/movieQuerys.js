export function movieQuerySorted(sortField, sortFieldDirection, vote_average_limit, search, skip) {
  return {
    query: `{
      movies (first: 6, skip: ${skip}, sortField: "${sortField}", sortDir: ${sortFieldDirection}, vote_average: ${vote_average_limit}, filter: "${search}"){
        id
        title
        release_date
        poster_path
        vote_average
        overview
      }
    }`,
    variables: null
  }
}

export function movieQuerySortedCount(sortField, sortFieldDirection, vote_average_limit, search) {
  return {
    query: `{
      numberOfMovies (sortField: "${sortField}", sortDir: ${sortFieldDirection}, vote_average: ${vote_average_limit}, filter: "${search}")
    }`,
    variables: null
  }
}

export function movieQueryFilter(vote_average_limit, search, skip) {
  return {
    query: `{
      movies (first: 6, skip: ${skip},vote_average: ${vote_average_limit}, filter: "${search}"){
        id
        title
        release_date
        poster_path
        vote_average
        overview
      }
    }`,
    variables: null
  }
}

export function movieQueryFilterCount(vote_average_limit, search) {
  return {
    query: `{
      numberOfMovies (vote_average: ${vote_average_limit}, filter: "${search}")
    }`,
    variables: null
  }
}