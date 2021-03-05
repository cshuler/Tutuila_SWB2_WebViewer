import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { WebMercatorViewport } from "react-map-gl";

const runOffData = require("../data/geoJson_files/runoff_prj_cleaned.json");
const ETData = require("../data/geoJson_files/ET_prj_cleaned.json");
const interceptionData = require("../data/geoJson_files/interception_prj_cleaned.json");
const rechargeData = require("../data/geoJson_files/recharge_prj_cleaned.json");

const styles = {
  pieChartFont: {
    fontSize: "10px",
    fontFamily: "sans-serif",
  },
  pieContainer: {
    width: 300,
    height: 200,
  },
};

export default class PieChartMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieDataArray: [],
      viewport: {}
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.viewport !== this.props.viewport) {
      this.setState({
        viewport: nextProps.viewport
      });
    }
    //this gets the bounds of the viewer
    const vp = new WebMercatorViewport(nextProps.viewport);
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

    var sumOfData =
      runOffGridCodeTotal +
      ETGridCodeTotal +
      interceptionGridCodeTotal +
      rechargeGridCodeTotal;
    var runOffPercentage = Math.floor((runOffGridCodeTotal / sumOfData) * 100);
    var ETPercentage = Math.floor((ETGridCodeTotal / sumOfData) * 100);
    var InterceptionPercentage = Math.floor(
      (interceptionGridCodeTotal / sumOfData) * 100
    );
    var rechargePercentage = Math.floor(
      (rechargeGridCodeTotal / sumOfData) * 100
    );

    this.setState({
      pieDataArray: [
        {
          title: `R.O.`,
          value: runOffGridCodeTotal,
          percentage: `${runOffPercentage}%`,
          color: "#E38627",
        },
        {
          title: `ET`,
          value: ETGridCodeTotal,
          percentage: `${ETPercentage}%`,
          color: "#01BDD3",
        },
        {
          title: `Int.`,
          value: interceptionGridCodeTotal,
          percentage: `${InterceptionPercentage}%`,
          color: "#71F523",
        },
        {
          title: `Recharge`,
          value: rechargeGridCodeTotal,
          percentage: `${rechargePercentage}%`,
          color: "#78BCED",
        },
      ],
    });
  }
  render() {
    return (
      <div style={styles.pieContainer}>
        <PieChart
          data={this.state.pieDataArray}
          paddingAngle={5}
          lineWidth={40}
          label={({ dataEntry }) =>
            `${dataEntry.title}: ${dataEntry.percentage}`
          }
          labelStyle={{
            ...styles.pieChartFont,
          }}
          animate={true}
          viewBoxSize={[125, 125]}
          radius={42}
          labelPosition={100}
        />
      </div>
    );
  }
}
