import React from 'react'
import store from '../../store/Store'
import { connect } from "react-redux";
import UpdateSearch from '../../actions/UpdateSearch';

function SearchField (props) {
  function  handleChange (e) {
    store.dispatch(UpdateSearch(e.target.value));
  }
  return (
    <div>Search: <input type="text" name="search" value={props.search} onChange={handleChange}/></div>
  )
}

const mapStateToProps = state => {
  return {
    search: state.SortReducer.search,
  };
};
export default connect(mapStateToProps)(SearchField);