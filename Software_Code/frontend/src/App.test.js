import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});



// describe('App component', () => {
//   it('starts with a count of 0', () => {
//     const wrapper = shallow(<App />);
//     const text = wrapper.find('ProcedureList').text();
//     expect(true).toBe(true);
//   });
// });
