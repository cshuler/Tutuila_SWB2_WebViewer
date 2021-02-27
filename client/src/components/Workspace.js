import React, { Component } from "react";
import ReactMapGL, { WebMercatorViewport } from "react-map-gl";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import "./MyMap.css";

import { PieChart } from "react-minimal-pie-chart";

const { REACT_APP_MAPBOX_ACCESS_TOKEN } = require("../config/keys");
const runOffData = require("../data/geoJson_files/runoff_prj_cleaned.json");
const ETData = require("../data/geoJson_files/ET_prj_cleaned.json");
const interceptionData = require("../data/geoJson_files/interception_prj_cleaned.json");
const rechargeData = require("../data/geoJson_files/recharge_prj_cleaned.json");

const styles = {
  pieChartFont: {
    fontSize: "10px",
    fontFamily: "sans-serif"
  },
  mapCpontainer: {
    marginTop: "10px"
  },
  pieChartContainer: {
    width: 200,
    height: 200,
    display: "flext",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
  },
  sliderContainer: {
    width: 100
  },
  selectedMapHeader: {
    textAlign: "center"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  changeMapButton: {
    margin: "5px",
  }
}

export default class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: -14.3,
        longitude: -170.7,
        width: "745px",
        height: "490px",
        zoom: 10.5,
      },
      viewport2: {
        latitude: -14.3,
        longitude: -170.7,
        width: "100%",
        height: "500px",
        zoom: 10.5,
      },
      mapStylingStyle: "mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2",
      mapStylingOpacity: "50%",
      selectedMap: "Run off",
      opacityValueLevel: 100,
      opacityValuePercentage: "100%",
      pieDataArray: [],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
    this.check = this.check.bind(this);
  }

  check(newViewport) {
    //this gets the bounds of the viewer
    const vp = new WebMercatorViewport(newViewport);
    const theBounds = vp.getBounds();
    const westBound = Number(theBounds[0][0]);
    const southBound = Number(theBounds[0][1]);
    const eastBound = Number(theBounds[1][0]);
    const northBound = Number(theBounds[1][1]);

    ///////////////////////////////////////////////
    var runOffGridCodeTotal = 0;

    const runOffFilteredData = runOffData.features
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][1][0]) <= eastBound
      )
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][1][1]) <= northBound
      )
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][3][0]) >= westBound
      )
      .filter((feature) =>
        Number(feature.geometry.coordinates[0][3][1] >= southBound)
      );

    runOffFilteredData.forEach((feature) => {
      runOffGridCodeTotal += Number(feature.properties.gridCode);
    });

    //////////////////////////////////////////////////////

    var ETGridCodeTotal = 0;

    const ETFilteredData = ETData.features
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][1][0]) <= eastBound
      )
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][1][1]) <= northBound
      )
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][3][0]) >= westBound
      )
      .filter((feature) =>
        Number(feature.geometry.coordinates[0][3][1] >= southBound)
      );

    ETFilteredData.forEach((feature) => {
      ETGridCodeTotal += Number(feature.properties.gridCode);
    });

    ///////////////////////////////////////////////
    var interceptionGridCodeTotal = 0;

    const interceptionFilteredData = interceptionData.features
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][1][0]) <= eastBound
      )
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][1][1]) <= northBound
      )
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][3][0]) >= westBound
      )
      .filter((feature) =>
        Number(feature.geometry.coordinates[0][3][1] >= southBound)
      );

    interceptionFilteredData.forEach((feature) => {
      interceptionGridCodeTotal += Number(feature.properties.gridCode);
    });
    ////////////////////////////////////////////////////////////////////
    var rechargeGridCodeTotal = 0;

    const rechargeFilteredData = rechargeData.features
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][1][0]) <= eastBound
      )
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][1][1]) <= northBound
      )
      .filter(
        (feature) => Number(feature.geometry.coordinates[0][3][0]) >= westBound
      )
      .filter((feature) =>
        Number(feature.geometry.coordinates[0][3][1] >= southBound)
      );

    rechargeFilteredData.forEach((feature) => {
      rechargeGridCodeTotal += Number(feature.properties.gridCode);
    });

    var sumOfData = runOffGridCodeTotal + ETGridCodeTotal + interceptionGridCodeTotal + rechargeGridCodeTotal
    var runOffPercentage = Math.floor((runOffGridCodeTotal / sumOfData) * 100)
    var ETPercentage = Math.floor((ETGridCodeTotal / sumOfData) * 100)
    var InterceptionPercentage = Math.floor((interceptionGridCodeTotal / sumOfData) * 100)
    var rechargePercentage = Math.floor((rechargeGridCodeTotal / sumOfData) * 100)

    this.setState({
      pieDataArray: [
        { title: `R.O.`, value: runOffGridCodeTotal, percentage: `${runOffPercentage}%`, color: "#E38627" },
        { title: `ET`, value: ETGridCodeTotal, percentage: `${ETPercentage}%`, color: "#01BDD3" },
        {
          title: `Int.`,
          value: interceptionGridCodeTotal,
          percentage: `${InterceptionPercentage}%`,
          color: "#71F523",
        },
        { title: `Recharge`, value: rechargeGridCodeTotal, percentage: `${rechargePercentage}%`, color: "#78BCED" },
      ],
      viewport: newViewport
    });
    // return console.log(this.state.pieDataArray)
  }
  render() {
    return (
      <div>
        <div style={styles.mapCpontainer}>
          <ReactMapGL
            {...this.state.viewport}
            maxZoom={18}
            minZoom={10.5}
            mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
            onViewportChange={(newViewport) => {
              this.check(newViewport)
            }}
            mapStyle={"mapbox://styles/kanakahacks/ckkkwbaag37w017p665v22142"}
            attributionControl={false}
          >
            <ReactMapGL
              {...this.state.viewport}
              maxZoom={18}
              minZoom={10.5}
              mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
              // onMouseUp={this.check}
              mapStyle={this.state.mapStylingStyle}
              style={{ opacity: this.state.opacityValuePercentage }}
            ></ReactMapGL>
          </ReactMapGL>
        </div>

        <div
          style={styles.pieChartContainer}
        >
          <PieChart
            data={this.state.pieDataArray}
            paddingAngle={5}
            lineWidth={40}
            label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.percentage}`}
            labelStyle={{
              ...styles.pieChartFont,
            }}
            animate={true}
            viewBoxSize={[125, 125]}
            radius={42}
            labelPosition={100}
          />
        </div>

        <div style={styles.sliderContainer}>

          <Slider
            value={this.state.opacityValueLevel}
            onChange={(event, newValue) => {
              this.setState({
                opacityValueLevel: newValue,
                opacityValuePercentage: `${newValue}%`,
              });
            }}
            aria-labelledby="continuous-slider"
          />
          <p>{this.state.opacityValueLevel}</p>
        </div>
        <div>


          <h1 style={styles.selectedMapHeader}>{this.state.selectedMap}</h1>
          <div
            id="buttonsDiv"
            style={styles.buttonContainer}
          >
            <Button
              variant="outlined"
              color="primary"
              style={styles.changeMapButton}
              onClick={() => {
                this.setState({
                  selectedMap: "Run Off",
                  mapStylingStyle:
                    "mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2",
                });
              }}
            >
              Run Off
          </Button>
            <Button
              variant="outlined"
              color="primary"
              style={styles.changeMapButton}
              onClick={() => {
                this.setState({
                  selectedMap: "Recharge",
                  mapStylingStyle:
                    "mapbox://styles/kanakahacks/ckkj3885701qs18lcfdyms3k0",
                });
              }}
            >
              Recharge
          </Button>
            <Button
              variant="outlined"
              color="primary"
              style={styles.changeMapButton}
              onClick={() => {
                this.setState({
                  selectedMap: "Interception",
                  mapStylingStyle:
                    "mapbox://styles/kanakahacks/ckkj4fpf902h617o0nbcyy6yi",
                });
              }}
            >
              Interception
          </Button>
            <Button
              variant="outlined"
              color="primary"
              style={styles.changeMapButton}
              onClick={() => {
                this.setState({
                  selectedMap: "ET",
                  mapStylingStyle:
                    "mapbox://styles/kanakahacks/ckkj59vqf1if617lnmh73qaj1",
                });
              }}
            >
              ET
          </Button>
            <Button
              variant="outlined"
              color="primary"
              style={styles.changeMapButton}
              onClick={() => {
                this.setState({
                  selectedMap: "Rainfall",
                  mapStylingStyle:
                    "mapbox://styles/kanakahacks/ckkj69k4b111k17mn3wz0071p",
                });
              }}
            >
              Rainfall
          </Button>
          </div>
        </div>
      </div>
    );
  }
}