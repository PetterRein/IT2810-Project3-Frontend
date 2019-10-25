import React from 'react'
import UpdateSortField from '../../actions/UpdateSortField'
import UpdateSortDir from '../../actions/UpdateSortDir'
import store from '../../store/Store'
import { connect } from "react-redux";

// Lager radio buttons sånn at du kan velge retning på sorteringen og hvilket felt du vil sortere
function RadioButtons (props) {
  return (
      <label className="radio">
          <input
          name={props.name}
          type="radio"
          className={props.type}
          value={props.value}
          checked={props.value === props.checked}
          onChange={props.onChange} />
          {props.name}
      </label>
  )
};
const SortQuerySelector = (props) => {
  function  handleChange (e) {
    if (e.target.className === 'field'){
      store.dispatch(UpdateSortField(e.target.value));
    }
    if (e.target.className === 'direction'){
      store.dispatch(UpdateSortDir(e.target.value));
    }
  }
  const sortField = [{ name: 'Title', value: 'title', type: 'field' }, { name: 'Release Date', value: 'release_date', type: 'field' }, { name: 'Score', value: 'vote_average', type: 'field' }, { name: 'None fields', value: '', type: 'field' }]
  const sortFieldButtons = sortField.map((field) =>
    <RadioButtons onChange={handleChange} checked={props.sortByField} key={field.name} name={field.name} value={field.value} type={field.type}/>)
  const sortFieldDirectionection = [{ name:'DESC', value: "true", type: 'direction' }, { name: 'ASC', value: "false", type: 'direction' }, { name: 'No direction', value: "", type: 'direction' }]
  const sortFieldDirectionectionButtons = sortFieldDirectionection.map((direction) =>
    <RadioButtons onChange={handleChange} checked={props.sortFieldDirection} key={direction.name} name={direction.name} value={direction.value} type={direction.type}/>)
  return (
    <div>
      Sort by field:
      <ul>
        {sortFieldButtons}
      </ul>
      Sort direction:
      <ul>
        {sortFieldDirectionectionButtons}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    sortByField: state.SortReducer.sortByField,
    sortFieldDirection: state.SortReducer.sortFieldDirection
  };
};
export default connect(mapStateToProps)(SortQuerySelector);