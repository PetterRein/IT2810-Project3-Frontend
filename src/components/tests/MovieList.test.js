import React from 'react'
import MovieListElement from "../MovieListElement"
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe("Sort component", () => {
  const movieInfo = {
    title: "Joker",
    release_date: "2019-04-04"
  }
  let wrapper

  beforeEach(()=>{
    wrapper = shallow(<MovieListElement movieInfo={movieInfo}/>)  
  })
  it("renders correctly", () => expect(wrapper).toHaveLength(1))
})