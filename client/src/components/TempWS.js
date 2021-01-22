import React, { useState, useRef } from 'react'
import ReactMapGL, { Source, Layer } from 'react-map-gl'
import { MapContainer, TileLayer, LayersControl, Circle, LayerGroup, useMapEvents, GeoJSON, Marker } from 'react-leaflet'
import "./MyMap.css"
import chroma from 'chroma-js'
import {dataLayer} from './map-style'
const {REACT_APP_MAPBOX_TOKEN} = require('../config/keys')

//const worker = new Worker('./worker.js')


// const ETData = require('../data/geoJson_files/ET_prj_cleaned.json')
// const interceptionData = require('../data/geoJson_files/interception_prj_cleaned.json')
// const rainFallData = require('../data/geoJson_files/rainfall_prj_cleaned.json')
// const rechargeData = require('../data/geoJson_files/recharge_prj_cleaned.json')
const runOffData = require('../data/geoJson_files/runoff_prj_cleaned.json')


const mapCenter = [-14.30, -170.70]
const zoomLevel = 11;
var highestGridcode = 0

export default function TempWS() {
    // cellStyle = (cell) => {
    //     var gridcode = cell.properties.gridCode
    //     // console.log(gridcode.toFixed(2))
    //     if (gridcode > highestGridcode) {
    //         highestGridcode = gridcode
    //     }
    //     if (gridcode === 0) {
    //         return {
    //             fillColor: 'black', color: 'black', fillOpacity: 1
    //         }
    //     }

    //     var mapScale = chroma.scale(['blue', 'yellow', 'red'])
    //         .domain([0, 180])

    //     var fillColor = mapScale(gridcode)

    //     return {
    //         fillColor: fillColor,
    //         color: fillColor,
    //         fillOpacity: 1
    //     }
    // }
    const [viewport, setViewport] = useState({
        latitude: -14.30,
        longitude: -170.70,
        width: "100%",
        height: "500px",
        zoom: 10.5,
      });
    const mapRef = useRef();

    return (
        <ReactMapGL
          {...viewport}
          maxZoom={20}
          mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
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

