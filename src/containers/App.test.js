import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  mount(<App />);
});

it('renders IATACodeInput component', () => {
  const component = mount(<App />);

  expect(component.find('IATACodeInput')).toBeTruthy();
});

it('renders DestinationsList component', () => {
  const component = mount(<App />);

  expect(component.find('DestinationsList')).toBeTruthy();
});