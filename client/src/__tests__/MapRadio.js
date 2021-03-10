import React from 'react'
import { shallow } from 'enzyme'
import MapRadio from '../components/MapRadio';

const mapRadio = shallow(<MapRadio />);

it('renders correctly', () => {
  expect(mapRadio).toMatchSnapshot();
});
