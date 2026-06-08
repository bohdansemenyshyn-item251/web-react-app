import React from 'react';
import { Badge, Col, Container, Row, Table } from 'react-bootstrap';
import {
  getSelectedDevices,
  loadDevicesFromStorage,
} from '../constants/storageConstants';

function DashboardPage() {
  const devices = loadDevicesFromStorage();
  const selectedDevices = getSelectedDevices(devices);

  const totalEnergyProduced = selectedDevices
    .reduce((sum, device) => sum + Number(device.energyProduced || 0), 0)
    .toFixed(1);

  const averageEfficiency =
    selectedDevices.length > 0
      ? Math.round(
          selectedDevices.reduce(
            (sum, device) => sum + Number(device.efficiency || 0),
            0
          ) / selectedDevices.length
        )
      : 0;

  const totalInteractions = devices.reduce(
    (sum, device) => sum + Number(device.selected || 0),
    0
  );

  return (
    <Container className="dashboard-container">
      <section className="hero-panel">
        <Badge bg="success" className="status-badge">
          SELECTED IOT MONITORING
        </Badge>
        <h1>Smart Solar Energy Dashboard</h1>
        <p>
          This dashboard reads selected IoT devices from localStorage and shows
          a persistent summary of the renewable energy monitoring configuration.
        </p>
      </section>

      <Row className="g-4 mb-4">
        <Col xs={12} md={4}>
          <div className="stat-card">
            <span>Selected Devices</span>
            <strong>{selectedDevices.length}</strong>
            <p>Number of devices currently included in the monitoring list.</p>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <div className="stat-card">
            <span>Total Energy Produced</span>
            <strong>{totalEnergyProduced} kWh</strong>
            <p>Combined energy production of selected IoT energy devices.</p>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <div className="stat-card">
            <span>Average Efficiency</span>
            <strong>{averageEfficiency}%</strong>
            <p>Average efficiency calculated only from selected devices.</p>
          </div>
        </Col>
      </Row>

      <section className="page-header-panel">
        <h2>Selected Devices Summary</h2>

        {selectedDevices.length === 0 ? (
          <p>
            No devices are selected. Open the Devices page or the Combined page
            and add IoT devices to the monitoring list.
          </p>
        ) : (
          <Table responsive borderless className="iot-table">
            <thead>
              <tr>
                <th>Device</th>
                <th>Type</th>
                <th>Efficiency</th>
                <th>Energy Produced</th>
                <th>Interactions</th>
              </tr>
            </thead>
            <tbody>
              {selectedDevices.map((device) => (
                <tr key={device.id}>
                  <td>{device.title}</td>
                  <td>{device.type}</td>
                  <td>{device.efficiency}%</td>
                  <td>{device.energyProduced} kWh</td>
                  <td>{device.selected}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </section>

      <section className="page-header-panel">
        <h2>Monitoring Activity</h2>
        <p>
          Total device interactions stored in the browser: {totalInteractions}.
        </p>
      </section>
    </Container>
  );
}

export default DashboardPage;