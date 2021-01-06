import React, { Component } from 'react'
import { MapContainer, TileLayer, Popup, Marker, LayersControl, Circle, LayerGroup, FeatureGroup, Rectangle, GeoJSON } from 'react-leaflet'
import "./MyMap.css"
import chroma from 'chroma-js'
import mapboxgl from 'mapbox-gl'
import { map } from 'leaflet'
// import geojsonvt from 'geojson-vt'


const ETData = require('../data/geoJson_files/ET_prj_cleaned.json')
const interceptionData = require('../data/geoJson_files/interception_prj_cleaned.json')
const rainFallData = require('../data/geoJson_files/rainfall_prj_cleaned.json')
const rechargeData = require('../data/geoJson_files/recharge_prj_cleaned.json')
const runOffData = require('../data/geoJson_files/runoff_prj_cleaned.json')

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FuYWthaGFja3MiLCJhIjoiY2tqa3NxcGRrMGYwcjJ5cnRoa3Vxcm44dSJ9.64q6h3IMKGz6P8msFnIHSQ';

// const gp = require("geojson-precision")

const mapCenter = [-14.30, -170.70]
const zoomLevel = 11;
var highestGridcode = 0
export class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -170.70,
            lat: -14.30,
            zoom: 10.5
        };
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        map.on('load', function () {
            // Add a new source from our GeoJSON data and
            // set the 'cluster' option to true. GL-JS will
            // add the point_count property to your source data.
            map.addSource('cell', {
                type: 'geojson',
                // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
                // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
                data:
                    runOffData,
                cluster: true,
                clusterMaxZoom: 14, // Max zoom to cluster points on
                clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
            });
        })
    }
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

            return(
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <h3>Map</h3>
                    </div>
                    <div style={{ height: "360px" }} ref={el => this.mapContainer = el} className="mapContainer" />
                </div >
            )
    }
}

export default Map


// render() {
//     const rectangle = [
//         [51.49, -0.08],
//         [51.5, -0.06],
//     ]

//     return (
//         <div>
//             <div style={{ textAlign: 'center' }}>
//                 <h3>Map</h3>
//             </div>

//             <p>Modal agreement</p>
//             <div id="mapdiv">
//                 <p>Map Div</p>
//                 <MapContainer style={{ height: "480px" }} center={mapCenter} zoom={zoomLevel} scrollWheelZoom={false}>

//                     <LayersControl position="topright">

//                         <LayersControl.BaseLayer name="ET">
//                             <GeoJSON key='my-geojson' style={this.cellStyle} data={ETData.features} />
//                             {/* <GeoJSON key='my-geojson' style={this.cellStyle} data={this.props.data.features} onEachFeature={this.onEachCell} /> */}

//                         </LayersControl.BaseLayer>
//                         <LayersControl.BaseLayer name="interception">
//                             <GeoJSON key='my-geojson' style={this.cellStyle} data={interceptionData.features} />
//                             {/* <GeoJSON key='my-geojson' style={this.cellStyle} data={this.props.data.features} onEachFeature={this.onEachCell} /> */}

//                         </LayersControl.BaseLayer>
//                         <LayersControl.BaseLayer name="rainfall">
//                             <GeoJSON key='my-geojson' style={this.cellStyle} data={rainFallData.features} />
//                             {/* <GeoJSON key='my-geojson' style={this.cellStyle} data={this.props.data.features} onEachFeature={this.onEachCell} /> */}

//                         </LayersControl.BaseLayer>
//                         <LayersControl.BaseLayer name="recharge">
//                             <GeoJSON key='my-geojson' style={this.cellStyle} data={rechargeData.features} />
//                             {/* <GeoJSON key='my-geojson' style={this.cellStyle} data={this.props.data.features} onEachFeature={this.onEachCell} /> */}

//                         </LayersControl.BaseLayer>
//                         <LayersControl.BaseLayer checked name="Run Off">
//                             <GeoJSON key='my-geojson' style={this.cellStyle} data={runOffData.features} />
//                             {/* <GeoJSON key='my-geojson' style={this.cellStyle} data={this.props.data.features} onEachFeature={this.onEachCell} /> */}

//                         </LayersControl.BaseLayer>
//                         <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
//                             <TileLayer
//                                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                             />
//                         </LayersControl.BaseLayer>
//                         <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
//                             <TileLayer
//                                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                                 url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
//                             />
//                         </LayersControl.BaseLayer>
//                         <LayersControl.BaseLayer name="OpenTopoMap">
//                             <TileLayer
//                                 attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//                                 url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
//                             />
//                         </LayersControl.BaseLayer>
//                         <LayersControl.BaseLayer name="Esri.WorldImagery">
//                             <TileLayer
//                                 attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
//                                 url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//                             />
//                         </LayersControl.BaseLayer>

//                         <LayersControl.Overlay name="Marker with popup">
//                             <Marker position={mapCenter}>
//                                 <Popup>
//                                     A pretty CSS3 popup. <br /> Easily customizable.
//                                 </Popup>
//                             </Marker>
//                         </LayersControl.Overlay>
//                         <LayersControl.Overlay name="Layer group with circles">
//                             <LayerGroup>
//                                 <Circle
//                                     center={mapCenter}
//                                     pathOptions={{ fillColor: 'blue' }}
//                                     radius={200}
//                                 />
//                                 <Circle
//                                     center={mapCenter}
//                                     pathOptions={{ fillColor: 'red' }}
//                                     radius={100}
//                                     stroke={false}
//                                 />
//                                 <LayerGroup>
//                                     <Circle
//                                         center={[51.51, -0.08]}
//                                         pathOptions={{ color: 'green', fillColor: 'green' }}
//                                         radius={100}
//                                     />
//                                 </LayerGroup>
//                             </LayerGroup>
//                         </LayersControl.Overlay>
//                         <LayersControl.Overlay name="Feature group">
//                             <FeatureGroup pathOptions={{ color: 'purple' }}>
//                                 <Popup>Popup in FeatureGroup</Popup>
//                                 <Circle center={[51.51, -0.06]} radius={200} />
//                                 <Rectangle bounds={rectangle} />
//                             </FeatureGroup>
//                         </LayersControl.Overlay>

//                     </LayersControl>
//                 </MapContainer>
//             </div>
//         </div>
//     )
// }