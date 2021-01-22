import React, { useState } from 'react'
import ReactMapGL, { Source, Layer } from 'react-map-gl'
import "./MyMap.css"
//import chroma from 'chroma-js'
import {dataLayer} from './map-style'
const {REACT_APP_MAPBOX_ACESS_TOKEN} = require('../config/keys')

//const worker = new Worker('./worker.js')


// const ETData = require('../data/geoJson_files/ET_prj_cleaned.json')
// const interceptionData = require('../data/geoJson_files/interception_prj_cleaned.json')
// const rainFallData = require('../data/geoJson_files/rainfall_prj_cleaned.json')
// const rechargeData = require('../data/geoJson_files/recharge_prj_cleaned.json')
const runOffData = require('../data/geoJson_files/runoff_prj_cleaned.json')


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
          minZoom={5}
          mapboxApiAccessToken={REACT_APP_MAPBOX_ACESS_TOKEN}
          onViewportChange={(newViewport) => {
            setViewport({ ...newViewport} )
          }}
        >
          <Source type='geojson' data={runOffData}>
            <Layer {...dataLayer} />
          </Source>
        </ReactMapGL>
      );
}

