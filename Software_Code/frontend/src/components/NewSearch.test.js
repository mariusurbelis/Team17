import React from 'react';
import { render } from '@testing-library/react';
import NewSearch from './NewSearch';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isCompositeComponent } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() })


it('renders without crashing', ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<NewSearch></NewSearch>, div)
})

it('renders searchbar correctly', () => {
  function callBack(){
    console.log("called back")
  }
  render(<NewSearch home={false} 
    parentcallback={callBack} ></NewSearch>)
})


it("matches snapshot", ()=> {
  function callBack(){
    console.log("called back")
  }
  const tree =  renderer.create(<NewSearch home={false} 
  parentcallback={callBack}></NewSearch>)
  expect(tree).toMatchSnapshot();
})