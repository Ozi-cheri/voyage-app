import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png"; // Adjust the path as needed

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img 
                    src={logo} 
                    alt="Voyage Logo" 
                    width="50" // Adjust size as needed
                    height="50"
                    className="d-inline-block align-top"
                />
                Voyage
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
