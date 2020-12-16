import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <h3>The American Samoa Water Budget Viewer</h3>
                        <h5><i>An Interactive Web-Application</i></h5>
                </div>
                <p>This tool allows you to explore the water budget of Tutuila Island, American Samoa. The water budget calculates the balance between different water flux reservoirs including runoff, evaporation, and infiltration into the ground, as fractions of the amount of precipitation received. This balance is calculated with a gridded water budget model, which calculates the amount of water going to each reservoir for every cell of the grid.</p>
                <p>The Map-Viewer Page provides an interactive map where you can explore the spatial distribution of each of these factors across the island. In the workspace you can also calculate the water balance for customizable zones across Tutuila.</p>
                        <h5>Head to the [Map-Viewer Page] to start exploring!</h5>
                
                <p>[IMAGE of recharge map link to map viewr page]</p>
            </div>
        )
    }
}

export default Home