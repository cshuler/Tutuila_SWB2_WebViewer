import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import { Slider } from "@material-ui/core";
import Modal from "./WorkspaceModal";
import { Button } from "antd";

import PieChartMap from "./PieChartMap";
import MapRadio from "./MapRadio";

import runOffLegend from "../assets/runOffLegend.png";
import rechargeLegend from "../assets/rechargeLegend.png";
import interceptionLegend from "../assets/interceptionLegend.png";
import ETLegend from "../assets/ETLegend.png";
import rainfallLegend from "../assets/rainfallLegend.png";

const { REACT_APP_MAPBOX_ACCESS_TOKEN } = require("../config/keys");

const styles = {
  workSpaceContainer: {
    display: "flex",
    justifyContent: "center",
  },
  mapCpontainer: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  pieChartContainer: {
    display: "flext",
    justifyContent: "center",
    alignItems: "center",
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
    width: 200,
  },
  opacityLevel: {
    width: 150,
  },
  legendImg: {
    display: "flex",
    justifyContent: "center",
  },
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
      gifts: [],
      modalIsOpen: true,
    };
    this.changeMap = this.changeMap.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.renderLegend = this.renderLegend.bind(this)
    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)
  }
  changeMap(selectedMap, mapStylingStyle) {
    this.setState({ selectedMap, mapStylingStyle });
  }
  handleOpenModal() {
    this.setState({ modalIsOpen: true });
  }
  handleCloseModal() {
    this.setState({ modalIsOpen: false });
  }
  handleZoomIn() {
    var viewport = this.state.viewport
    viewport.zoom = viewport.zoom + 1
    this.setState({ viewport })
  }
  handleZoomOut(e) {
    var viewport = this.state.viewport
    viewport.zoom = viewport.zoom - 1
    this.setState({ viewport })
  }
  renderLegend() {

    let theLegend = null

    if (this.state.selectedMap === "Runoff") {
      theLegend = runOffLegend;
    } else if (this.state.selectedMap === "Recharge") {
      theLegend = rechargeLegend;
    } else if (this.state.selectedMap === "ET") {
      theLegend = ETLegend;
    } else if (this.state.selectedMap === "Rainfall") {
      theLegend = rainfallLegend;
    } else if (this.state.selectedMap === "Interception") {
      theLegend = interceptionLegend;
    } else {
      theLegend = null;
    }

    return <img
      src={theLegend}
      alt="Girl in a jacket"
      width="500"
      height="100"
    />;
  }
  render() {
    return (
      <div style={styles.workSpaceContainer}>
        <div >
          <PieChartMap viewport={this.state.viewport} style={styles.pieChartContainer} />
        </div>

        <Modal
          modalIsOpen={this.state.modalIsOpen}
          handleOpen={this.handleOpenModal}
          handleClose={this.handleCloseModal}
        />

        <div>
          <div style={styles.mapCpontainer}>
            <ReactMapGL
              {...this.state.viewport}
              maxZoom={18}
              minZoom={10.5}
              showCompass={true}
              showZoom={true}
              mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
              onViewportChange={(newViewport) => {
                this.setState({ viewport: newViewport });
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
              >
              </ReactMapGL>
            </ReactMapGL>
            <div style={{position: "absolute", top:"5px", right:"5px" }}>
              <Button onClick={this.handleZoomIn}>+</Button>
              <Button onClick={this.handleZoomOut}>-</Button>
            </div>
            <br></br>
          </div>
          <div style={styles.legendImg}>
            {this.renderLegend()}
          </div>
          <div style={styles.legendImg}>
            <p><strong>All units are in inches</strong></p>
          </div>
        </div>

        <div style={styles.rightColumn}>
          <div>
            <h3 style={styles.selectedMapHeader}>{this.state.selectedMap}</h3>
          </div>

          <div>
            <MapRadio
              changeMap={this.changeMap}
              selectedMap={this.state.selectedMap}
            />
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
            <p style={styles.opacityLevel}>
              Opacity Level: {this.state.opacityValueLevel}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
