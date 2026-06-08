import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function MenuComponent() {
  return (
    <Navbar expand="lg" className="dashboard-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-title">
          Smart Solar IoT
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="iot-dashboard-navbar" />

        <Navbar.Collapse id="iot-dashboard-navbar">
          <Nav className="ms-auto navigation-links">
            <Nav.Link as={NavLink} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/devices">
              Devices
            </Nav.Link>
            <Nav.Link as={NavLink} to="/analytics">
              Analytics
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/combined">
              Combined
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuComponent;