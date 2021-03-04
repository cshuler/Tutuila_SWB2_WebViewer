import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";
import ReactMapGL, { WebMercatorViewport } from "react-map-gl";

const styles = {
  pieChartFont: {
    fontSize: "10px",
    fontFamily: "sans-serif"
  }
}

export default class PieChartMap extends Component {
  construtor(props) {
  }
  render() {
    return (
      <div>
        <PieChart
          data={this.props.pieDataArray}
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
