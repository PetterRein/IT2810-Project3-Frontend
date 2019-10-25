import React from 'react'
import store from '../../store/Store'
import { connect } from "react-redux";
import UpdatePageNumber from '../../actions/UpdatePageNumber';
import './PageSelector.css';


function Options (props) {
  return <option value={props.value}>Page: {props.value + 1}</option>
}

// Lager et object som lar deg velge hvilken side du skal være på
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
	    <div className={"selectorWrapper"}>
		    <select className={'pageSelector'} onChange={handleChange} value={props.page}>
			    {pages}
		    </select>
	    </div>
	  : <></>
  )
}

const mapStateToProps = state => {
  return {
    page: state.SortReducer.page,
    numberOfMovies: state.MoviesReducer.numberOfMovies
  };
};
export default connect(mapStateToProps)(PageSelector);
