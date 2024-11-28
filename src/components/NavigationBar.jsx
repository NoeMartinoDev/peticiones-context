import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavigationBar = () => {

    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/detail">Detalle</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavigationBar;