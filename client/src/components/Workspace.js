import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import Slider from "@material-ui/core/Slider";

import PieChartMap from "./PieChartMap";
import MapRadio from "./MapRadio"

const { REACT_APP_MAPBOX_ACCESS_TOKEN } = require("../config/keys");

const styles = {
  workSpaceContainer: {
    display: "flex",
    justifyContent: "center"
  },
  mapCpontainer: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pieChartContainer: {
    width: 200,
    height: 200,
    display: "flext",
    justifyContent: "center",
    alignItems: "center",
    marginLeft:10,
  },
  sliderContainer: {
    width: 100,
  },
  selectedMapHeader: {
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  changeMapButton: {
    margin: "5px",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    width: 200
  },
  opacityLevel: {
    width: 150
  }
};

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
      mapStylingStyle: "mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2",
      mapStylingOpacity: "50%",
      selectedMap: "Runoff",
      opacityValueLevel: 100,
      opacityValuePercentage: "100%",
      pieDataArray: [],
    };
    this.changeMap = this.changeMap.bind(this);
  }

  changeMap(selectedMap, mapStylingStyle) {
    this.setState({ selectedMap, mapStylingStyle });
  }
  render() {
    return (
      <div style={styles.workSpaceContainer}>
        <div>
          <PieChartMap viewport={this.state.viewport} />
        </div>
        <div style={styles.mapCpontainer}>
          <ReactMapGL
            {...this.state.viewport}
            maxZoom={18}
            minZoom={10.5}
            mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
            onViewportChange={(newViewport) => {
              this.setState({ viewport: newViewport })
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

        <div style={styles.rightColumn}>
          <div>
            <h3 style={styles.selectedMapHeader}>{this.state.selectedMap}</h3>
          </div>

          <div>
            <MapRadio changeMap={this.changeMap} selectedMap={this.state.selectedMap} />
          </div>
          <br></br>

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
            <p style={styles.opacityLevel}>Opacity Level: {this.state.opacityValueLevel}</p>
          </div>

        </div>
      </div>
    );
  }
}
