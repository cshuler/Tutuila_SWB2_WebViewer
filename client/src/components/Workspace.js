import React, { Component } from 'react'
import { PieChart } from './PieChart'
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'

export class Workspace extends Component {
    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h3>Workspace</h3>
                </div>
                <p>Modal agreement</p>
                <div>
                    <p>Map Div</p>
                    <MapContainer style={{ height: "360px" }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
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
