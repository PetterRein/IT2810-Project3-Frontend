import React from 'react'
import store from '../../store/Store'
import { connect } from "react-redux";
import UpdatePageNumber from '../../actions/UpdatePageNumber';

function Options (props) {
  return <option value={props.value}>Page: {props.value + 1}</option>
}


function PageSelector (props) {
  function  handleChange (e) {
    store.dispatch(UpdatePageNumber(e.target.value));
  }
  const numberOfPagesNeeded =  Math.ceil(props.numberOfMovies / 6)
  const pages = []
  for (let i = 0; i < numberOfPagesNeeded; i++) {
    pages.push(<Options key={i} value={i} page={props.page}/>)
  }
  return  ( 
    numberOfPagesNeeded ?
    <select onChange={handleChange} value={props.page}>
      {pages}
    </select> : <></>
  )
}

const mapStateToProps = state => {
  return {
    page: state.SortReducer.page,
    numberOfMovies: state.MoviesReducer.numberOfMovies
  };
};
export default connect(mapStateToProps)(PageSelector);