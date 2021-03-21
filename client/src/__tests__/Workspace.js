import React from 'react'
import { shallow } from 'enzyme'
import Workspace from '../components/Workspace';

const workspace = shallow(<Workspace />);

it('renders correctly', () => {
  expect(workspace).toMatchSnapshot();
});

it('initializes the `state`', () => {
    expect(workspace.state().viewport).toEqual({
        latitude: -14.3,
        longitude: -170.7,
        width: "745px",
        height: "490px",
        zoom: 10.5,
    })
    expect(workspace.state().mapStylingStyle).toEqual("mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2")
    expect(workspace.state().mapStylingOpacity).toEqual("50%")
    expect(workspace.state().selectedMap).toEqual("Runoff")
    expect(workspace.state().opacityValueLevel).toEqual(100)
    expect(workspace.state().opacityValuePercentage).toEqual('100%')
    expect(workspace.state().pieDataArray).toEqual([])
    expect(workspace.state().gifts).toEqual([])
}); 