import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default function NavigationBar (){
        return (
            <div>
               
                <Navbar bg='primary' variant="dark" >

                    <Navbar.Brand href="/" eventkey="home">Tutuila</Navbar.Brand>
                    <Nav justify variant="pill">
                        <Nav.Item>
                            <Nav.Link href="/workspace" eventKey="workspace" >Workspace</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/modeldetails" eventKey="modeldetails" >Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/background" eventKey="background" >Background</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about" eventKey="about" >AboutApp</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
   
                    
                

            </div>
        )
    
}
