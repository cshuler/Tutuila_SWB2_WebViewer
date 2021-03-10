import React from 'react'
import { shallow } from 'enzyme'
import MapRadio from './MapRadio';

const mapRadio = shallow(<MapRadio />);

it('renders correctly', () => {
  expect(mapRadio).toMatchSnapshot();
});
