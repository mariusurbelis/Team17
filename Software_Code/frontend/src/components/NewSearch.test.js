import React from 'react';
import { render } from '@testing-library/react';
import NewSearch from './NewSearch';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

describe('Test Form Submit', () => {
  it('Fail if no input', () => {
    // let mock;
    const mock = jest.fn();
    const inp = searchComp.find("input");
    const searchComp = shallow(<handleSubmit/>);
    expect(inp.length).toBe(0);
    searchComp.find("input").simulate('submit', {submit});
    expect(searchComp.find(NewSearch).length).toBe(1);
  });
});