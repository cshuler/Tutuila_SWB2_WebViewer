import React, { Component } from "react";
import ReactMapGL, { WebMercatorViewport } from "react-map-gl";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import "./MyMap.css";

const { REACT_APP_MAPBOX_ACCESS_TOKEN } = require("../config/keys");
const runOffData = require("../data/geoJson_files/runoff_prj_cleaned.json");
const eTData = require("../data/geoJson_files/ET_prj_cleaned.json")
const interceptionData = require("../data/geoJson_files/interception_prj_cleaned.json")
const rechargeData = require("../data/geoJson_files/recharge_prj_cleaned.json")

export default class Workspace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewport: {
                latitude: -14.3,
                longitude: -170.7,
                width: "100%",
                height: "500px",
                zoom: 10.5,},
            mapStylingStyle: "mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2",
            mapStylingOpacity: "50%",
            selectedMap: "Run off",
            opacityValueLevel: 100, 
            opacityValuePercentage: "100%", 
            pieDataArray: []
        }
        this.check = this.check.bind(this)
    }

  check(){

    //this gets the bounds of the viewer
    const vp = new WebMercatorViewport(this.state.viewport);
    const theBounds = vp.getBounds();
    const westBound = Number(theBounds[0][0]);
    const southBound = Number(theBounds[0][1]);
    const eastBound = Number(theBounds[1][0]);
    const northBound = Number(theBounds[1][1]);

    //this sets the value number for the piechart
    var runOffGridCodeTotal = 0;
    this.setState({pieDataArray: []})

    console.log('first', this.state.pieDataArray)

    //this filters using the bounds
    //filters out if the any of the corners of the feature goes out of the view
    const runOffFilteredData = runOffData.features
    .filter(feature =>
      Number(feature.geometry.coordinates[0][1][0]) <= eastBound
    )
    .filter(feature =>
      Number(feature.geometry.coordinates[0][1][1]) <= northBound
    )
    .filter(feature => 
      Number(feature.geometry.coordinates[0][3][0]) >= westBound
    )
    .filter(feature =>
      Number(feature.geometry.coordinates[0][3][1] >= southBound)
    )

    // all the features that made it through the filter
    // make each add their gridCode
    runOffFilteredData.forEach((feature) => {
      runOffGridCodeTotal += Number(feature.properties.gridCode);
    })

    console.log('total count', runOffGridCodeTotal)

    console.log('type', typeof(this.state.pieDataArray))
    console.log('second', this.state.pieDataArray)

    console.log('push', this.state.pieDataArray)

    let joined = this.state.pieDataArray.concat(runOffGridCodeTotal)
    console.log('joined', joined)
    this.setState({pieDataArray: joined})

    console.log('third', this.state.pieDataArray)

                            // console.log('something length', runOffFilteredData.length)
                            // console.log('length', runOffData.features.length)
                            //console.log("runOffGridCodeTotal", runOffGridCodeTotal);

                            //go through ET geojson
                            //filter data to data within bounds
                            //sum the gridCode
                            
    // var eTGridCodeTotal = 0;

    // const eTFilteredData = eTData.features
    // .filter(feature =>
    //   Number(feature.geometry.coordinates[0][1][0]) <= eastBound
    // )
    // .filter(feature =>
    //   Number(feature.geometry.coordinates[0][1][1]) <= northBound
    // )
    // .filter(feature => 
    //   Number(feature.geometry.coordinates[0][3][0]) >= westBound
    // )
    // .filter(feature =>
    //   Number(feature.geometry.coordinates[0][3][1] >= southBound)
    // )

    // eTFilteredData.forEach((feature) => {
    //   eTGridCodeTotal += Number(feature.properties.gridCode);
    // })

    // setPieDataArray(pieDataArray.array.push(eTGridCodeTotal))

    // console.log('second look at state', pieDataArray)

                              //go through intercept geojson
                              //filter data to data within bounds
                              //sum the gridCode

    // var interceptionGridCodeTotal = 0;

    // const interceptionFilteredData = interceptionData.features
    // .filter(feature =>
    //   Number(feature.geometry.coordinates[0][1][0]) <= eastBound
    // )
    // .filter(feature =>
    //   Number(feature.geometry.coordinates[0][1][1]) <= northBound
    // )
    // .filter(feature => 
    //   Number(feature.geometry.coordinates[0][3][0]) >= westBound
    // )
    // .filter(feature =>
    //   Number(feature.geometry.coordinates[0][3][1] >= southBound)
    // )

    // interceptionFilteredData.forEach((feature) => {
    //   interceptionGridCodeTotal += Number(feature.properties.gridCode);
    // })

    // setPieDataArray(pieDataArray.array.push(interceptionGridCodeTotal))

    // console.log('third loook', pieDataArray)

                              //go through recharge geojson
                              //filter data to data within bounds
                              //sum the gridCode

    // var rechargeGridCodeTotal = 0;

    // const rechargeFilteredData = rechargeData.features
    // .filter(feature =>
    //   Number(feature.geometry.coordinates[0][1][0]) <= eastBound
    // )
    // .filter(feature =>
    //   Number(feature.geometry.coordinates[0][1][1]) <= northBound
    // )
    // .filter(feature => 
    //   Number(feature.geometry.coordinates[0][3][0]) >= westBound
    // )
    // .filter(feature =>
    //   Number(feature.geometry.coordinates[0][3][1] >= southBound)
    // )

    // rechargeFilteredData.forEach((feature) => {
    //   rechargeGridCodeTotal += Number(feature.properties.gridCode);
    // })

    // setPieDataArray(pieDataArray.array.push(rechargeGridCodeTotal))

    // console.log('4th look', pieDataArray)

                                //the sum of all the gridcodes go into an array

                                //the array goes to the State

                                //// the AnimatedPieSVG component will plug into the data in the state
  };

  render(){

      return (
          <div>
      <ReactMapGL
        {...this.state.viewport}
        maxZoom={20}
        minZoom={10.5}
        mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(newViewport) => {
            this.setState({viewport: newViewport})
        }}
        mapStyle={"mapbox://styles/kanakahacks/ckkkwbaag37w017p665v22142"}
        attributionControl={false}
        style={{ marginTop: "10px" }}
        >
        <ReactMapGL
          {...this.state.viewport}
          maxZoom={20}
          minZoom={10.5}
          mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={(newViewport) => {
              this.setState({viewport: newViewport})
              this.check();
            }}
            mapStyle={this.state.mapStylingStyle}
            style={{ opacity: this.state.opacityValuePercentage }}
            ></ReactMapGL>
      </ReactMapGL>

      <Slider
        value={this.state.opacityValueLevel}
        onChange={(event, newValue) => {
            this.setState({opacityValueLevel: newValue, opacityValuePercentage: `${newValue}%`})
        }}
        aria-labelledby="continuous-slider"
        />
      <p>{this.state.opacityValueLevel}</p>
      <h1 style={{ textAlign: "center" }}>{this.state.selectedMap}</h1>

      <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Button
          variant="outlined"
          color="primary"
          style={{
              margin: "5px",
            }}
            onClick={() => {
                this.state({selectedMap: "Run Off", mapStylingStyle: "mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2"})
            }}
            >
          Run Off
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={{
              margin: "5px",
            }}
            onClick={() => {
                this.state({selectedMap: "Recharge", mapStylingStyle: "mapbox://styles/kanakahacks/ckkj3885701qs18lcfdyms3k0"})
            }}
            >
          Recharge
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={{
              margin: "5px",
            }}
            onClick={() => {
                this.state({selectedMap: "Interception", mapStylingStyle: "mapbox://styles/kanakahacks/ckkj4fpf902h617o0nbcyy6yi"})
            }}
            >
          Interception
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={{
              margin: "5px",
            }}
            onClick={() => {
                this.state({selectedMap: "ET", mapStylingStyle: "mapbox://styles/kanakahacks/ckkj59vqf1if617lnmh73qaj1"})
            }}
            >
          ET
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={{
              margin: "5px",
            }}
            onClick={() => {
                this.state({selectedMap: "Rainfall", mapStylingStyle: "mapbox://styles/kanakahacks/ckkj69k4b111k17mn3wz0071p"})
            }}
            >
          Rainfall
        </Button>
      </div>
    </div>
  );
}
}
