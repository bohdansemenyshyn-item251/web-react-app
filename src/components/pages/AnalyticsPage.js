import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import {
  getSelectedDevices,
  loadDevicesFromStorage,
} from '../constants/storageConstants';

function AnalyticsPage() {
  const devices = loadDevicesFromStorage();
  const selectedDevices = getSelectedDevices(devices);

  const totalEnergyProduced = selectedDevices.reduce(
    (sum, device) => sum + Number(device.energyProduced || 0),
    0
  );

  const analytics = selectedDevices.map((device) => {
    const energyShare =
      totalEnergyProduced > 0
        ? Math.round((device.energyProduced / totalEnergyProduced) * 100)
        : 0;

    return {
      ...device,
      energyShare,
    };
  });

  return (
    <Container className="dashboard-container">
      <section className="page-header-panel">
        <h1>Energy Analytics</h1>
        <p>
          This page reads selected IoT devices from localStorage and calculates
          each device contribution to the monitored renewable energy system.
        </p>
      </section>

      {analytics.length === 0 ? (
        <section className="page-header-panel">
          <p>
            No devices are currently selected for analytics. Add devices on the
            Devices page or on the Combined page to view persistent energy
            statistics.
          </p>
        </section>
      ) : (
        <Row className="g-4">
          {analytics.map((device) => (
            <Col key={device.id} xs={12} md={6}>
              <div className="analytics-card">
                <div className="metric-row">
                  <span>{device.title}</span>
                  <strong>{device.energyShare}%</strong>
                </div>

                <ProgressBar now={device.energyShare} className="efficiency-progress" />

                <p>
                  Type: {device.type}. Efficiency: {device.efficiency}%.
                  Energy produced: {device.energyProduced} kWh. Selected:{' '}
                  {device.selected} time(s).
                </p>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default AnalyticsPage;