import React, { Component } from 'react'
import { PieChart } from './PieChart' 
import Map from './Map'
import MapBoxMap from './MapBoxMap'
export class Workspace extends Component {
    
    render() {
        return (
            <div>
                <Map />
                <MapBoxMap />
                <PieChart />
                <p>Layer Div</p>
                <p>Base Case Scenario Div</p>
                <p>Future Scenario Div</p>
                <p>Percent Change Div</p>
            </div>
        )
    }
}

export default Workspace
