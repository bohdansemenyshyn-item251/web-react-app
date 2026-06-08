import React, { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
} from 'react-bootstrap';
import {
  decrementDeviceSelection,
  getSelectedDevices,
  incrementDeviceSelection,
  loadDevicesFromStorage,
  saveDevicesToStorage,
} from '../constants/storageConstants';

function DevicesPage() {
  const [devices, setDevices] = useState(() => loadDevicesFromStorage());

  const selectedDevices = getSelectedDevices(devices);
  const totalInteractions = devices.reduce(
    (sum, device) => sum + Number(device.selected || 0),
    0
  );

  const persistDevices = (updatedDevices) => {
    setDevices(updatedDevices);
    saveDevicesToStorage(updatedDevices);
  };

  const handleAddToMonitoring = (deviceId) => {
    const updatedDevices = incrementDeviceSelection(devices, deviceId);
    persistDevices(updatedDevices);
  };

  const handleRemoveFromMonitoring = (deviceId) => {
    const updatedDevices = decrementDeviceSelection(devices, deviceId);
    persistDevices(updatedDevices);
  };

  return (
    <Container className="dashboard-container">
      <section className="page-header-panel">
        <Badge bg="success" className="status-badge">
          LAB 6 LOCAL STORAGE
        </Badge>
        <h1>IoT Devices</h1>
        <p>
          Select renewable energy devices for monitoring. Selected devices are
          saved in localStorage and remain available after switching pages or
          refreshing the browser.
        </p>
      </section>

      <Row className="g-4 mb-4">
        <Col xs={12} md={6}>
          <div className="stat-card">
            <span>Selected Devices</span>
            <strong>{selectedDevices.length}</strong>
            <p>Number of devices currently stored in the browser.</p>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="stat-card">
            <span>Total Interactions</span>
            <strong>{totalInteractions}</strong>
            <p>How many times the devices were added across pages.</p>
          </div>
        </Col>
      </Row>

      <Row className="g-4">
        {devices.map((device) => {
          const selected = Number(device.selected || 0) > 0;

          return (
            <Col key={device.id} xs={12} md={6} lg={4}>
              <Card className={`device-card h-100 ${selected ? 'device-card-selected' : ''}`}>
                <Card.Img
                  variant="top"
                  src={device.image}
                  alt={device.title}
                  className="device-page-image"
                />

                <Card.Body>
                  <div className="card-top-line">
                    <span className="device-type">{device.type}</span>
                    <Badge bg={selected ? 'info' : 'secondary'}>
                      {selected ? `Monitoring ×${device.selected}` : 'Available'}
                    </Badge>
                  </div>

                  <Card.Title>{device.title}</Card.Title>
                  <Card.Text>{device.description}</Card.Text>

                  <div className="metric-row">
                    <span>Efficiency</span>
                    <strong>{device.efficiency}%</strong>
                  </div>
                  <ProgressBar
                    now={device.efficiency}
                    className="efficiency-progress"
                  />

                  <div className="energy-output">
                    <span>Energy Produced</span>
                    <strong>{device.energyProduced} kWh</strong>
                  </div>

                  <div className="button-row">
                    <Button
                      variant="outline-info"
                      onClick={() => handleAddToMonitoring(device.id)}
                    >
                      Add to Monitoring
                    </Button>

                    <Button
                      variant="outline-danger"
                      onClick={() => handleRemoveFromMonitoring(device.id)}
                      disabled={!selected}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default DevicesPage;