import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png"; // Adjust the path as needed

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <img 
                    src={logo} 
                    alt="Voyage Logo" 
                    width="50" // Adjust size as needed
                    height="50" />
                    
                
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><i className="fa-solid fa-house"></i>Home</Nav.Link>
                    <Nav.Link><i className="fa-solid fa-sign-in-alt"></i>Sign in</Nav.Link>
                    <Nav.Link><i className="fa-solid fa-user-plus"></i> Sign up</Nav.Link>
                    <Nav.Link><i className="fa-solid fa-envelope"></i>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
