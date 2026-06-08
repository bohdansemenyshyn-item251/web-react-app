import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';

function DashboardPage() {
  return (
    <Container className="dashboard-container">
      <section className="hero-panel">
        <Badge bg="success" className="status-badge">
          REAL-TIME OVERVIEW
        </Badge>
        <h1>Smart Solar Energy Dashboard</h1>
        <p>
          The dashboard page presents the main overview of the IoT-based solar
          energy monitoring system. It displays key values from renewable energy
          devices and gives operators a quick understanding of system performance.
        </p>
      </section>

      <Row className="g-4">
        <Col xs={12} md={6} lg={3}>
          <div className="stat-card">
            <span>Total Energy</span>
            <strong>478.8 kWh</strong>
            <p>Combined production from all connected renewable IoT units.</p>
          </div>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <div className="stat-card">
            <span>Average Efficiency</span>
            <strong>88%</strong>
            <p>Average efficiency calculated from solar, battery, and meter data.</p>
          </div>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <div className="stat-card">
            <span>Active Devices</span>
            <strong>5</strong>
            <p>Number of IoT devices currently monitored by the dashboard.</p>
          </div>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <div className="stat-card">
            <span>System Status</span>
            <strong>Stable</strong>
            <p>The solar energy monitoring system is operating normally.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardPage;