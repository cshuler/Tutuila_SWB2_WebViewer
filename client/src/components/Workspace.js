import React, { Component } from 'react'
import { PieChart } from './PieChart'

export class Workspace extends Component {
    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <h3>Workspace</h3>
                </div>
                <p>Modal agreement</p>
                <p>Map Div</p>
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
