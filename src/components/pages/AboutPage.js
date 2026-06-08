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
          The application demonstrates client-side navigation with React Router.
          Each page represents a separate view of the IoT system: general
          dashboard overview, connected devices, analytical indicators, and
          system information.
        </p>
        <p>
          React Router allows the dashboard to behave as a single-page
          application. Navigation between pages is performed without a full page
          reload, which improves user experience and makes the interface more
          suitable for real-time IoT monitoring systems.
        </p>
      </section>
    </Container>
  );
}

export default AboutPage;