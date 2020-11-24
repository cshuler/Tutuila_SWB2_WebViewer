import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={'/'} style={{marginLeft: 10}} className="left" id="nav-mobile"> Tutuila </Link>
                    <Link to={'/workspace'} style={{marginLeft: 10}} className="left" id="nav-mobile"> Workspace </Link>
                    <Link to={'/modeldetails'} style={{marginLeft: 10}} className="left" id="nav-mobile"> Model Details</Link>
                    <Link to={'/background'} style={{marginLeft: 10}} className="left" id="nav-mobile"> Background </Link>
                    <Link to={'/about'} style={{marginLeft: 10}} className="left" id="nav-mobile"> About </Link>
                    <Link to={'/instruction'} style={{marginLeft: 10}} className="left" id="nav-mobile"> Instruction </Link>
                    <h1 style={{textAlign:'right', marginRight:25}}>Tutuila</h1>
                </div>
            </nav>
        )
    }
}
export default NavBar
