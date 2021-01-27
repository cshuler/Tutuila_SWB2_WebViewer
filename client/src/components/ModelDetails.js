import React, { Component } from 'react'
import tut_map from '../assets/Fig1.jpg'; 
import scematic from '../assets/scematic.JPG'; 
import imps from '../assets/input_datas.png'; 



export class ModelDetails extends Component {
    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <h3>Model Details</h3>
                </div>

                <div>
                    <h5>Study Area</h5>
                        <p>The Island of Tutuila , located near 14° S and 170° W, is the main population center of American Samoa, and at 142 km2 is the third largest island in the Samoan Hot-Spot Island Chain. Due to its position within the South Pacific Convergence Zone, the island experiences abundant year-round rainfall, with increased precipitation during the wet season from October to May. Monthly average rainfall in the wet season is roughly twice that of the dry season’s still significant rainfall amounts.</p>
                        
                        <div className="row">
                           <div className="map">
                              <img src={tut_map} width="500" height="250" alt='map' />
                              <i>Map of Tutuila Island</i>
                           </div>
                        </div>   
                </div>
                
                
                <div>
                    <h5>Modeling Methods</h5>
                        <p><i>The SWB2 Water Budget Model integrates long-term climate data with geospatial maps to effectively model hydrologic processes in steep tropical islands with high-spatial and temporal variability.</i></p>
                        
                        [note: how do I make these pop open as "read more" boxes?]
                        <p>In this study we used a water budget approach by applying the SWB2 model, a soil water-balance model developed by the US Geological Survey (USGS) to the Island of Tutuila in American Samoa, under average present-day climate conditions. The model was used to create a high-resolution groundwater recharge coverage for the whole island, as well as estimating other components such as evapotranspiration (ET), canopy interception, surface runoff, and mountain front recharge in gridded formats (Fig. 2). Additionally, the potential effects of future climate change on water resources availability were simulated by integrating dynamically downscaled climate predictions for 2080 to 2099 derived from externally supplied global climate model results. Notable improvements in this model over previously developed water budget models for Tutuila include flow-routing based on land topography, inclusion of the mountain front recharge process, and consideration of direct net infiltration from anthropogenic sources such as on-site wastewater units and leaking water delivery lines. </p>
                        
                        <div className="row">
                           <div className="scematic">
                              <img src={scematic} width="300" height="400" alt='scematic' />
                              <p><i>Diagram illustrating factors used to ~{"\n"} 
                              calculate water balance for Tutuila.</i></p>
                           </div>
                        </div>   
                </div>
  

                
                <div>
                    <h5>Input Datasets</h5>
                        
                        <p>Input data for the model were compiled from a combination of published data and data from our hydrologic monitoring network on Tutuila, including rainfall and streamflow data collected specifically for this project.</p>
                          
                        <div className="row">
                           <div className="imps">
                              <img src={imps} width="300" height="600" alt="imps" />
                              <p><i>Input datasets</i></p>
                           </div>
                        </div>  
                        
                        
                    {/* how do I add bullet point symbols? is in CSS? and add a column with picture on other side?  */}
                    <div>
                        <ul>
                        
                        <li>Temporal rainfall distributions</li>
                        <li>Land use data</li>
                        <li>Impervious surface ratios</li>
                        <li>Canopy coverage ratios</li>
                        <li>Soil type data</li>
                        <li>Direct infiltration data</li>
                        <li>Runoff-to-rainfall ratios</li>
                        <li>Potential evapotranspiration</li>
                        <li>Canopy evaporation data</li>
                        <li>Gridded temperature data</li>
                        <li>Mountain front recharge</li>

                        </ul>
                    
                    </div>                    
                        
                </div>
  
                
                
                
                
                
                
            </div>
        )
    }
}

export default ModelDetails
