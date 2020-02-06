import React from 'react';
import { render } from '@testing-library/react';
import NewSearch from './NewSearch';
import { shallow } from 'enzyme';

describe('Test Form Submit', () => {
  it('Fail if no input', () => {
    let mock;
    const mock = jest.fn();

    const searchComp = shallow(<handleSubmit/>)
    expect(handleSubmit.find(input).length).toBe(1);
    handleSubmit.find(input).simulate('submit', {submit});
    expect(handleSubmit.find(NewSearch).length).toBe(1);
  });
});