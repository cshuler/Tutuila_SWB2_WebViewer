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
var largestGridCode = 370

//370 is the largest gridcode
//1 - 0-37
//2 - 38-74
//3 - 75-111
//4 - 112-148
//5 - 149-185
//6 - 186-222
//7 - 223-259
//8 - 260-296
//9 - 297-333
//10 - 334-370

export class Workspace extends Component {
    cellStyle = (cell) => {
        var gridcode = cell.properties.gridcode

        if (gridcode >= 334) {
            return {fillColor: 'darkred', color: 'darkred', weight: 0, fillOpacity: 1}
        } else if (gridcode <= 333 && gridcode >=297) {
            return {fillColor: 'red', color: 'red', weight: 0, fillOpacity: 1}
        } else if (gridcode <= 296 && gridcode >=260) {
            return {fillColor: 'lightred', color: 'lightred', weight: 0, fillOpacity: 1}
        } else if (gridcode <= 259 && gridcode >=223) {
            return {fillColor: 'orange', color: 'orange', weight: 0, fillOpacity: 1}
        } else if (gridcode <= 222 && gridcode >=186) {
            return {fillColor: 'lightorange', color: 'lightorange', weight: 0, fillOpacity: 1}
        } else if (gridcode <= 185 && gridcode >=149) {
            return {fillColor: 'yellow', color: 'yellow', weight: 0, fillOpacity: 1}
        } else if (gridcode <= 148 && gridcode >=112) {
            return {fillColor: 'yellow', color: 'yellow', weight: 0, fillOpacity: 1}
        } else if (gridcode <= 111 && gridcode >=75) {
            return {fillColor: 'lightgreen', color: 'lightgreen', weight: 0, fillOpacity: 1}
        } else if (gridcode <= 74 && gridcode >=38) {
            return {fillColor: 'lightblue', color: 'lightblue', weight: 0, fillOpacity: 1}
        } else if (gridcode <= 37 && gridcode >=1) {
            return {fillColor: 'blue', color: 'blue', weight: 0, fillOpacity: 1}
        } else if (gridcode === 0) {
            return {fillColoe: 'black', color: 'black', weight: 0 , fillOpacity: 1}
        } else {
            return {fillColor: 'pink', fillOpacity: 1, color: 'pink', weight: 0.5}
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
