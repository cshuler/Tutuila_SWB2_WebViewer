import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import Button from '@material-ui/core/Button';
import "./MyMap.css"
import chroma from 'chroma-js'
//import {dataLayer} from './map-style'
const { REACT_APP_MAPBOX_ACCESS_TOKEN } = require('../config/keys')

var mapScale = chroma.scale(['blue', 'yellow', 'red'])
  .domain([0, 180])

//var fillColor = mapScale(gridcode)

export const dataLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'gridCode',
      stops: [
        [0, '#3288bd'],
        [1, '#66c2a5'],
        [2, '#abdda4'],
        [3, '#e6f598'],
        [4, '#ffffbf'],
        [5, '#fee08b'],
        [6, '#fdae61'],
        [7, '#f46d43'],
        [8, '#d53e4f']
      ]
    },
    'fill-opacity': 0.5
  }
};

//var highestGridcode = 0

export default function TempWS() {
  const [viewport, setViewport] = useState({
    latitude: -14.30,
    longitude: -170.70,
    width: "100%",
    height: "500px",
    zoom: 10.5,
  });
  const [mapStyling, setMapStyling] = useState({
    style: "mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2"
  })
  const [selectedMap, setSelectedMap] = useState({
    map: 'Run Off'
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
        mapStyle={mapStyling.style}
        style={{ marginTop: '10px' }}
      >
      </ReactMapGL>

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

