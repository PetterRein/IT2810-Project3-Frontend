import React from 'react'
import PageSelector from "../PageSelector"
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store'

configure({adapter: new Adapter()});
describe("Sort component", () => {
  const initialState = {
    SortReducer: {
      sortByField: '',
      sortFieldDirection: '',
      vote_average: "0",
      search: "",
      page: 0
    },
    MoviesReducer: {
      numberOfMovies: 40
    }
  }
  
  const mockStore = configureStore()
  let store,wrapper

  beforeEach(()=>{
      store = mockStore(initialState)
      wrapper = shallow(<PageSelector store={store}/>)  
  })
  it("renders correctly", () => expect(wrapper).toHaveLength(1))
})