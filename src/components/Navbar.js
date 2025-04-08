import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png"; // Adjust the path as needed
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const Navigation = () => {
    const currentUser = useCurrentUser();


    const loggedInIcons = <>{currentUser?.username}</>;
    const loggedOutIcons = (
     <>
     
       <Nav.Link as={NavLink} to="/signin" activeClassName={styles.active}>
                        <i className="fa-solid fa-sign-in-alt"></i> Sign In
                    </Nav.Link>

                    {/* Sign Up Link */}
                    <Nav.Link as={NavLink} to="/signup" activeClassName={styles.active}>
                        <i className="fa-solid fa-user-plus"></i> Sign Up
                    </Nav.Link>
                    </>
  );

    return (
        <Navbar  className={styles.navbar}bg="light" expand="lg">
            <Container>
        
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
                     {/* Home Link */}
                     <Nav.Link as={NavLink} to="/" exact activeClassName={styles.active}>
                        <i className="fa-solid fa-house"></i> Home
                    </Nav.Link>
                    {currentUser ? loggedInIcons : loggedOutIcons}

                    
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
