import React from 'react';
import { Card, Col, Container, ProgressBar, Row } from 'react-bootstrap';

function DevicesPage() {
  const devices = [
    {
      id: 1,
      title: 'Solar Panel Unit A',
      description: 'Primary photovoltaic unit monitoring sunlight conversion and voltage stability.',
      efficiency: 94,
      image: '/images/solar-panel.jpg',
    },
    {
      id: 2,
      title: 'Solar Panel Unit B',
      description: 'Secondary solar array collecting temperature and inverter response data.',
      efficiency: 89,
      image: '/images/solar-panel.jpg',
    },
    {
      id: 3,
      title: 'Battery Storage System',
      description: 'Smart battery unit tracking charge level, discharge flow, and backup capacity.',
      efficiency: 86,
      image: '/images/battery.jpg',
    },
    {
      id: 4,
      title: 'Smart Energy Meter',
      description: 'Digital meter measuring consumption, exported power, and total energy balance.',
      efficiency: 91,
      image: '/images/meter.jpg',
    },
    {
      id: 5,
      title: 'Wind Turbine',
      description: 'Hybrid renewable device measuring wind-assisted generation and rotor activity.',
      efficiency: 82,
      image: '/images/wind-turbine.jpg',
    },
  ];

  return (
    <Container className="dashboard-container">
      <section className="page-header-panel">
        <h1>IoT Devices</h1>
        <p>
          This page contains the list of renewable energy devices connected to
          the Smart Solar Energy Monitoring System.
        </p>
      </section>

      <Row className="g-4">
        {devices.map((device) => (
          <Col key={device.id} xs={12} md={6} lg={4}>
            <Card className="device-card h-100">
              <Card.Img
                variant="top"
                src={device.image}
                alt={device.title}
                className="device-page-image"
              />
              <Card.Body>
                <Card.Title>{device.title}</Card.Title>
                <Card.Text>{device.description}</Card.Text>

                <div className="metric-row">
                  <span>Efficiency</span>
                  <strong>{device.efficiency}%</strong>
                </div>
                <ProgressBar now={device.efficiency} className="efficiency-progress" />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DevicesPage;