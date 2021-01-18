import React, { Component } from 'react'
import { MapContainer, TileLayer, Popup, Marker, LayersControl, Circle, LayerGroup, FeatureGroup, Rectangle, GeoJSON } from 'react-leaflet'
import "./MyMap.css"
import chroma from 'chroma-js'

const Supercluster = require('supercluster');


const ETData = require('../data/geoJson_files/ET_prj_cleaned.json')
const interceptionData = require('../data/geoJson_files/interception_prj_cleaned.json')
const rainFallData = require('../data/geoJson_files/rainfall_prj_cleaned.json')
const rechargeData = require('../data/geoJson_files/recharge_prj_cleaned.json')
const runOffData = require('../data/geoJson_files/runoff_prj_cleaned.json')


const mapCenter = [-14.30, -170.70]
const zoomLevel = 11;
var highestGridcode = 0
export class TempWS extends Component {
    cellStyle = (cell) => {
        var gridcode = cell.properties.gridCode
        // console.log(gridcode.toFixed(2))
        if (gridcode > highestGridcode) {
            highestGridcode = gridcode
        }
        if (gridcode === 0) {
            return {
                fillColor: 'black', color: 'black', fillOpacity: 1
            }
        }

        var mapScale = chroma.scale(['blue', 'yellow', 'red'])
            .domain([0, 180])

        var fillColor = mapScale(gridcode)

        return {
            fillColor: fillColor,
            color: fillColor,
            fillOpacity: 1
        }
    }
    // onEachCell = (cell, layer ) => {
    //     //console.log(gridcode)
    //     layer.on({
    //         click: (event) => {
    //             event.target.setStyle({
    //                 fillColor: 'green',
    //                 color: 'green'
    //             })
    //         }
    //     })
    // }
    render() {
        const rectangle = [
            [51.49, -0.08],
            [51.5, -0.06],
        ]
        // var tileIndex = geojsonvt(this.props.data)
        // //var features = tileIndex.getTile(z, x, y).features;
        // console.log(tileIndex.tileCoords)

        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h3>Map</h3>
                </div>

                <script src="index.js"></script>
                
                <p>Modal agreement</p>
                <div id="mapdiv">
                    <p>Map Div</p>

                    <MapContainer style={{ height: "480px" }} center={mapCenter} zoom={zoomLevel} scrollWheelZoom={false}>
                        <LayersControl position="topright">
                            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                            </LayersControl.BaseLayer>


                            <LayersControl.Overlay name="Layer group with circles">
                                <LayerGroup>
                                    <Circle
                                        center={mapCenter}
                                        pathOptions={{ fillColor: 'blue' }}
                                        radius={200}
                                    />
                                    <Circle
                                        center={mapCenter}
                                        pathOptions={{ fillColor: 'red' }}
                                        radius={100}
                                        stroke={false}
                                    />
                                    <LayerGroup>
                                        <Circle
                                            center={[51.51, -0.08]}
                                            pathOptions={{ color: 'green', fillColor: 'green' }}
                                            radius={100}
                                        />
                                    </LayerGroup>
                                </LayerGroup>
                            </LayersControl.Overlay>

                        </LayersControl>
                    </MapContainer>
                </div>
            </div>
        )
    }
}

export default TempWS
