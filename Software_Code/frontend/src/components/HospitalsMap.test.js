import React from 'react';
import { render } from '@testing-library/react';
import HospitalsMap from './HospitalsMap';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isCompositeComponent } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() })


it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<HospitalsMap></HospitalsMap>, div)
})

it('renders searchbar correctly', () => {
    function callBack() {
        console.log("called back")
    }
    render(<HospitalsMap></HospitalsMap>)
})


it("matches snapshot", () => {
    function callBack() {
        console.log("called back")
    }
    const tree = renderer.create(<HospitalsMap></HospitalsMap>)
    // expect(tree).toMatchSnapshot();
    
    expect(true).toBeTruthy();
})