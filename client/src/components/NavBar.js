import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export class NavigationBar extends Component {
    render() {
        return (
            <div>
                
                    <Navbar.Brand href="/">Tutuila</Navbar.Brand>
                    <Nav className="mr-auto" justify variant="tabs" defaultActiveKey="/">
                        <Nav.Item>
                            <Nav.Link href="/tempworkspace">Temp</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/workspace">Workspace</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/modeldetails">Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/background">Background</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/instruction">Instruction</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    
                

            </div>
        )
    }
}
export default NavigationBar
