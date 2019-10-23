import React from 'react'
import store from '../../store/Store'
import { connect } from "react-redux";
import UpdateVoteAverage from '../../actions/UpdateVoteAverage';

function RadioButtons (props) {
  return (
      <label className="radio">
          <input
          name={props.name}
          type="radio"
          value={props.value}
          checked={props.value === props.checked}
          onChange={props.onChange} />
          {props.name}
      </label>
  )
};

function VoteAverageFilter (props) {
  function  handleChange (e) {
    store.dispatch(UpdateVoteAverage(e.target.value));
  }
  const legalValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  const valueButtons = legalValues.map((value) =>
    <RadioButtons onChange={handleChange} checked={props.vote_average} key={value} name={value} value={value}/>)
  return (
    <div>Score Limit: {valueButtons}</div>
  )
}


const mapStateToProps = state => {
  return {
    vote_average: state.SortReducer.vote_average
  };
};
export default connect(mapStateToProps)(VoteAverageFilter);