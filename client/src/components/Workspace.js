import React, { Component } from 'react'
import { PieChart } from './PieChart'
import { MapContainer, TileLayer, Popup, Marker, LayersControl, Circle, LayerGroup, FeatureGroup, Rectangle, Polygon, GeoJSON } from 'react-leaflet'
import "./MyMap.css"

const runOffData = require('../data/geoJson_files/runoff.json')

const data = [];

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [-14.30, -170.70]
const zoomLevel = 12;

var numberthing = 0 

//370 is the largest gridcode

export class Workspace extends Component {
    cellStyle = (cell) => {
        var gridcode = cell.properties.gridcode

        if (gridcode > 0) {
            return {fillColor: 'green', color: 'yellow', weight: 1, fillOpacity: 0.5}
        } else {
            return {fillColor: 'black', fillOpacity: 1, color: 'black', weight: 1}
        }
    }
    // cellStyle = {
    //     fillColor: 'red',
    //     fillOpacity: 0.5,
    //     color: 'black',
    //     weight: 1
    // }
    onEachCell = (cell, layer ) => {
        //console.log(gridcode)
        layer.on({
            click: (event) => {
                event.target.setStyle({
                    fillColor: 'green',
                    color: 'green'
                })
            }
        })
    }
    render() {
        const rectangle = [
            [51.49, -0.08],
            [51.5, -0.06],
        ]

        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h3>Workspace</h3>
                </div>

                <p>Modal agreement</p>
                <div id="mapdiv">
                    <p>Map Div</p>
                    <MapContainer style={{ height: "480px" }} center={mapCenter} zoom={zoomLevel} scrollWheelZoom={false}>

                        <LayersControl position="topright">

                            <LayersControl.BaseLayer checked name="Run Off">
                                <GeoJSON key='my-geojson' style={this.cellStyle} data={runOffData.features} onEachFeature={this.onEachCell} />

                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                                />
                            </LayersControl.BaseLayer>
                            
                            <LayersControl.Overlay name="Marker with popup">
                                <Marker position={mapCenter}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </LayersControl.Overlay>
                            <LayersControl.Overlay checked name="Layer group with circles">
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
                            <LayersControl.Overlay name="Feature group">
                                <FeatureGroup pathOptions={{ color: 'purple' }}>
                                    <Popup>Popup in FeatureGroup</Popup>
                                    <Circle center={[51.51, -0.06]} radius={200} />
                                    <Rectangle bounds={rectangle} />
                                </FeatureGroup>
                            </LayersControl.Overlay>

                        </LayersControl>
                    </MapContainer>
                </div>
                <PieChart />
                <p>Layer Div</p>
                <p>Base Case Scenario Div</p>
                <p>Future Scenario Div</p>
                <p>Percent Change Div</p>
            </div>
        )
    }
}

export default Workspace
