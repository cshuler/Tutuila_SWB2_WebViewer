import React from 'react'
import { shallow } from 'enzyme'
import PieChartMap from '../components/PieChartMap';

const pieChartMap = shallow(<PieChartMap />);

it('renders correctly', () => {
  expect(pieChartMap).toMatchSnapshot();
});

it('intializes clean state', () => {
    expect(pieChartMap.state().pieDataArray).toEqual([])
    expect(pieChartMap.state().viewport).toEqual({})
    expect(pieChartMap.state().cellCountOnViewer).toEqual(0)
    expect(pieChartMap.state().rainFallGridCodeTotalOnViewer).toEqual(0)
    expect(pieChartMap.state().runOffGridCodeTotalOnViewer).toEqual(0)
    expect(pieChartMap.state().rechargeGridCodeTotalOnViewer).toEqual(0)
    expect(pieChartMap.state().ETGridCodeTotalOnViewer).toEqual(0)
    expect(pieChartMap.state().interceptionGridCodeTotalOnViewer).toEqual(0)
})