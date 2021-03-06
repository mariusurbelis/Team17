import React from 'react';
import { render } from '@testing-library/react';
import ProvCard from './ProvCard';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isCompositeComponent } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() })

const card = {ProviderName: "test",
DRGDefinition: "test def",
GPDID: 69,
TotalPayments: 6969}

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProvCard card={card}></ProvCard>, div)
})

it('renders searchbar correctly', () => {
    function callBack() {
        console.log("called back")
    }
    render(<ProvCard card={card}></ProvCard>)
})


it("matches snapshot", () => {
    function callBack() {
        console.log("called back")
    }
    const tree = renderer.create(<ProvCard card={card}></ProvCard>)
    expect(tree).toMatchSnapshot();
    // expect(true).toBeTruthy();
})

