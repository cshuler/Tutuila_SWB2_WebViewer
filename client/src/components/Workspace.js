import React, { Component } from 'react'
import { PieChart } from './PieChart' 
import Map from './Map'

const runOffData = require('../data/geoJson_files/Runoff_prj.json')

export class Workspace extends Component {
    
    render() {
        return (
            <div>
                <Map data={runOffData} />
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
