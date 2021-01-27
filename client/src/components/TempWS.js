import React, { useState } from 'react'
import ReactMapGL, { Source, Layer } from 'react-map-gl'
import "./MyMap.css"
import chroma from 'chroma-js'
//import {dataLayer} from './map-style'
const {REACT_APP_MAPBOX_ACCESS_TOKEN} = require('../config/keys')

//const worker = new Worker('./worker.js')


// const ETData = require('../data/geoJson_files/ET_prj_cleaned.json')
// const interceptionData = require('../data/geoJson_files/interception_prj_cleaned.json')
// const rainFallData = require('../data/geoJson_files/rainfall_prj_cleaned.json')
// const rechargeData = require('../data/geoJson_files/recharge_prj_cleaned.json')
const runOffData = require('../data/geoJson_files/runoff_prj_cleaned.json')

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

    return (
        <ReactMapGL
          {...viewport}
          maxZoom={20}
          minZoom={12}
          mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={(newViewport) => {
            setViewport({ ...newViewport} )
          }}
          mapStyle="mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2"
        >
          
        </ReactMapGL>
      );
}

