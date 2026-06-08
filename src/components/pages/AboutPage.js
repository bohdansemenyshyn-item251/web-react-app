import React from 'react';
import { Container } from 'react-bootstrap';

function AboutPage() {
  return (
    <Container className="dashboard-container">
      <section className="page-header-panel about-panel">
        <h1>About the System</h1>
        <p>
          Smart Solar Energy Dashboard is a React-based web interface designed
          for visualization of Internet of Things data in a renewable energy
          monitoring environment.
        </p>
        <p>
          In Lab 6, the project is extended with localStorage data sharing.
          Selected IoT devices are stored in the browser and can be accessed
          from different pages of the dashboard.
        </p>
        <p>
          The Combined, Devices, Dashboard, and Analytics pages all work with
          the same browser-stored data, so the interface behaves like a simple
          single-page system without a backend server.
        </p>
      </section>
    </Container>
  );
}

export default AboutPage;