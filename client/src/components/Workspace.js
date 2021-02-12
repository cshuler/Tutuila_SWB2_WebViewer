import React, { useState } from "react";
import ReactMapGL, { WebMercatorViewport } from "react-map-gl";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import "./MyMap.css";

const { REACT_APP_MAPBOX_ACCESS_TOKEN } = require("../config/keys");
const runOffData = require("../data/geoJson_files/runoff_prj_cleaned.json");

export default function Workspace() {
  const [viewport, setViewport] = useState({
    latitude: -14.3,
    longitude: -170.7,
    width: "100%",
    height: "500px",
    zoom: 10.5,
  });
  const [mapStyling, setMapStyling] = useState({
    style: "mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2",
    opacity: "50%",
  });
  const [selectedMap, setSelectedMap] = useState({
    map: "Run Off",
  });
  const [opacityValue, setOpacityValue] = useState({
    level: 100,
    percentage: "100%",
  });

  const check = () => {
    const vp = new WebMercatorViewport(viewport);

    const theBounds = vp.getBounds();
    console.log("theBounds", theBounds);
    const westBound = Number(theBounds[0][0]);
    const southBound = Number(theBounds[0][1]);
    const eastBound = Number(theBounds[1][0]);
    const northBound = Number(theBounds[1][1]);

    console.log("westBound", westBound);
    console.log("southBound", southBound);
    console.log("eastBound", eastBound);
    console.log("northBound", northBound);

    console.log(
      "polygon coordinates",
      runOffData.features[0].geometry.coordinates[0]
    );

    // const northEastCorner = runOffData.features[0].geometry.coordinates[0][1];
    // console.log("northEastCorner", northEastCorner);

    // const southWestCorner = runOffData.features[0].geometry.coordinates[0][3];
    // console.log("southWestCorner", southWestCorner);

    // let eastWall = northEastCorner[0];
    // let northWall = northEastCorner[1];
    // let westWall = southWestCorner[0];
    // let southWall = southWestCorner[1];

    // console.log("eastwall", eastWall);
    // console.log("northWall", northWall);
    // console.log("westWall", westWall);
    // console.log("southWall", southWall);

    //go through each runoff geojson
    var gridCodeTotal = 0;
    // runOffData.features
    // .filter((polygon) => {
    //   // let northEastCorner = polygon.geometry.coordinates[0][1];
    //   // let southWestCorner = polygon.geometry.coordinates[0][3];

    //   let eastWall = Number(polygon.geometry.coordinates[0][1][0]);
    //   let northWall = Number(polygon.geometry.coordinates[0][1][1]);
    //   let westWall = Number(polygon.geometry.coordinates[0][3][0]);
    //   let southWall = Number(polygon.geometry.coordinates[0][3][1]);
    //   return (
    //     eastWall >= eastBound &&
    //     westWall <= westBound &&
    //     northWall <= northBound &&
    //     southWall >= southBound
    //   );
    // })
    //   .forEach((feature) => {
    //     //let eastSide = feature.geometry.coordinate[]
    //     gridCodeTotal += Number(feature.properties.gridCode);
    //   })


    const something = runOffData.features
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

    something.forEach((feature) => {
      //let eastSide = feature.geometry.coordinate[]
      gridCodeTotal += Number(feature.properties.gridCode);
    })
    

    console.log('something length', something.length)
    console.log('length', runOffData.features.length)



    //console.log(runOffData.features.forEach(y => console.log(y.geometry.coordinates)))
    console.log("gridCodeTotal", gridCodeTotal);
    //filter data to data within bounds
    //sum the gridCode

    //go through ET geojson
    //filter data to data within bounds
    //sum the gridCode

    //go through intercept geojson
    //filter data to data within bounds
    //sum the gridCode

    //go through recharge geojson
    //filter data to data within bounds
    //sum the gridCode

    //the sum of all the gridcodes go into an array

    //the array goes to the State

    //// the AnimatedPieSVG component will plug into the data in the state
  };

  const [pieData, setPieData] = useState({
    data: null,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        maxZoom={20}
        minZoom={10.5}
        mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(newViewport) => {
          setViewport({ ...newViewport });
        }}
        mapStyle={"mapbox://styles/kanakahacks/ckkkwbaag37w017p665v22142"}
        attributionControl={false}
        style={{ marginTop: "10px" }}
      >
        <ReactMapGL
          {...viewport}
          maxZoom={20}
          minZoom={10.5}
          mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={(newViewport) => {
            setViewport({ ...newViewport });
            check();
          }}
          mapStyle={mapStyling.style}
          style={{ opacity: opacityValue.percentage }}
        ></ReactMapGL>
      </ReactMapGL>

      <Slider
        value={opacityValue.level}
        onChange={(event, newValue) => {
          setOpacityValue({ level: newValue, percentage: `${newValue}%` });
        }}
        aria-labelledby="continuous-slider"
      />
      <p>{opacityValue.level}</p>
      <h1 style={{ textAlign: "center" }}>{selectedMap.map}</h1>

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
            setMapStyling({
              style: "mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2",
            });
            setSelectedMap({ map: "Run Off" });
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
            setMapStyling({
              style: "mapbox://styles/kanakahacks/ckkj3885701qs18lcfdyms3k0",
            });
            setSelectedMap({ map: "Recharge" });
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
            setMapStyling({
              style: "mapbox://styles/kanakahacks/ckkj4fpf902h617o0nbcyy6yi",
            });
            setSelectedMap({ map: "Interception" });
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
            setMapStyling({
              style: "mapbox://styles/kanakahacks/ckkj59vqf1if617lnmh73qaj1",
            });
            setSelectedMap({ map: "ET" });
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
            setMapStyling({
              style: "mapbox://styles/kanakahacks/ckkj69k4b111k17mn3wz0071p",
            });
            setSelectedMap({ map: "Rainfall" });
          }}
        >
          Rainfall
        </Button>
      </div>
    </div>
  );
}
