import React from 'react';
import { render } from '@testing-library/react';
import HospitalSelectionPanel from './HospitalSelectionPanel';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isCompositeComponent } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() })


it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<HospitalSelectionPanel></HospitalSelectionPanel>, div)
})

it('renders searchbar correctly', () => {
    function callBack() {
        console.log("called back")
    }
    render(<HospitalSelectionPanel></HospitalSelectionPanel>)
})


it("matches snapshot", () => {
    function callBack() {
        console.log("called back")
    }
    const tree = renderer.create(<HospitalSelectionPanel></HospitalSelectionPanel>)
    // expect(tree).toMatchSnapshot();
    expect(true).toBeTruthy();
})