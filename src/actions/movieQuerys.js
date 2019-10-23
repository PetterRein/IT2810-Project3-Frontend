export function movieQuerySorted(sortField, sortFieldDirection, vote_average_limit, search) {
  return {
    query: `{
      movies (sortField: "${sortField}", sortDir: ${sortFieldDirection}, vote_average: ${vote_average_limit}, filter: "${search}"){
        id
        title
        release_date
        poster_path
        vote_average
      }
    }`,
    variables: null
  }
}

export function movieQueryFilter(vote_average_limit, search) {
  return {
    query: `{
      movies (vote_average: ${vote_average_limit}, filter: "${search}"){
        id
        title
        release_date
        poster_path
        vote_average
      }
    }`,
    variables: null
  }
}