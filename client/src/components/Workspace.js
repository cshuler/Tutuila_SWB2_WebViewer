import React, { useState } from 'react'
import ReactMapGL, { WebMercatorViewport } from 'react-map-gl'
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider'
import "./MyMap.css"

const { REACT_APP_MAPBOX_ACCESS_TOKEN } = require('../config/keys')
const runOffData = require('../data/geoJson_files/runoff_prj_cleaned.json')


export default function Workspace() {
  const [viewport, setViewport] = useState({
    latitude: -14.30,
    longitude: -170.70,
    width: "100%",
    height: "500px",
    zoom: 10.5,
  });
  const [mapStyling, setMapStyling] = useState({
    style: "mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2",
    opacity: "50%"
  })
  const [selectedMap, setSelectedMap] = useState({
    map: 'Run Off'
  })
  const [opacityValue, setOpacityValue] = useState({
    level: 100,
    percentage: "100%"
  })

  const check = () => {
    const vp = new WebMercatorViewport(viewport)
    const theBounds = vp.getBounds()
    console.log('something', theBounds)

    //go through each runoff geojson
    var numberthing = 0
    runOffData.features.forEach(feature => numberthing += Number(feature.properties.gridCode))
    console.log(runOffData.features.forEach(y => console.log(y.geometry.coordinates)))
    console.log('numberthing', numberthing)
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


  }

  const [pieData, setPieData] = useState({
    data: null
  })

  return (
    <div>
      <ReactMapGL
        {...viewport}
        maxZoom={20}
        minZoom={10.5}
        mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(newViewport) => {
          setViewport({ ...newViewport })
        }}
        mapStyle={"mapbox://styles/kanakahacks/ckkkwbaag37w017p665v22142"}
        attributionControl={false}
        style={{ marginTop: '10px' }}>


        <ReactMapGL
          {...viewport}
          maxZoom={20}
          minZoom={10.5}
          mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={(newViewport) => {
            setViewport({ ...newViewport })
            check()
          }}
          mapStyle={mapStyling.style}
          style={{ opacity: opacityValue.percentage }}

        >
        </ReactMapGL>
      </ReactMapGL>

      <Slider value={opacityValue.level} onChange={(event, newValue) => { setOpacityValue({ level: newValue, percentage: `${newValue}%` }) }} aria-labelledby="continuous-slider" />
      <p>{opacityValue.level}</p>
      <h1 style={{ textAlign: "center" }}>{selectedMap.map}</h1>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          variant="outlined"
          color="primary"
          style={{
            margin: '5px'
          }}

          onClick={() => {
            setMapStyling({ style: "mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2" })
            setSelectedMap({ map: "Run Off" })
          }}
        >
          Run Off
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={{
            margin: '5px'
          }}

          onClick={() => {
            setMapStyling({ style: "mapbox://styles/kanakahacks/ckkj3885701qs18lcfdyms3k0" })
            setSelectedMap({ map: "Recharge" })
          }}
        >
          Recharge
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={{
            margin: '5px'
          }}

          onClick={() => {
            setMapStyling({ style: "mapbox://styles/kanakahacks/ckkj4fpf902h617o0nbcyy6yi" })
            setSelectedMap({ map: "Interception" })
          }}
        >
          Interception
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={{
            margin: '5px'
          }}

          onClick={() => {
            setMapStyling({ style: "mapbox://styles/kanakahacks/ckkj59vqf1if617lnmh73qaj1" })
            setSelectedMap({ map: "ET" })
          }}
        >
          ET
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={{
            margin: '5px'
          }}

          onClick={() => {
            setMapStyling({ style: "mapbox://styles/kanakahacks/ckkj69k4b111k17mn3wz0071p" })
            setSelectedMap({ map: "Rainfall" })
          }}
        >
          Rainfall
        </Button>
      </div>
    </div>
  );
}

