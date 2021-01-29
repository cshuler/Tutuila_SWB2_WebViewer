import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">Tutuila</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/tempworkspace">Temp</Nav.Link>
                        <Nav.Link href="/workspace">Workspace</Nav.Link>
                        <Nav.Link href="/modeldetails">Details</Nav.Link>
                        <Nav.Link href="/background">Background</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/instruction">Instruction</Nav.Link>
                    </Nav>
                    
                </Navbar>

            </div>
        )
    }
}
export default NavigationBar
