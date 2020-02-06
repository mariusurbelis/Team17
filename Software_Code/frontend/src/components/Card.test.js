import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isCompositeComponent } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() })


it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card key={1} card={{
        ProviderName: 'test driven development',
        DRGDefinition: 'testDefinition',
        GPDID: "GDPID Test",
        TotalPayments: 10909,
    }} ></Card>, div)
})

it('renders searchbar correctly', () => {
    function callBack() {
        console.log("called back")
    }
    render(<Card card={{
        ProviderName: 'test',
        DRGDefinition: 'testDefinition',
        GPDID: "GDPID Test",
        TotalPayments: 10909,
    }} ></Card>)
})


it("matches snapshot", () => {
    function callBack() {
        console.log("called back")
    }
    const tree = renderer.create(<Card key={1} card={{
        ProviderName: 'test driven development',
        DRGDefinition: 'testDefinition',
        GPDID: "GDPID Test",
        TotalPayments: 10909,
    }} ></Card>)
    expect(tree).toMatchSnapshot();
    // expect(true).toBeTruthy();
})