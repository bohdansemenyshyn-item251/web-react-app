import React, { useEffect, useState } from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import IoTCard from '../../components/iot-card/IoTCard';
import {
  incrementDeviceSelection,
  loadDevicesFromStorage,
  saveDevicesToStorage,
} from '../constants/storageConstants';
import '../../App.css';

function CombinedPage() {
  const [iotDevices, setIotDevices] = useState(() => loadDevicesFromStorage());

  useEffect(() => {
    const handleStorageChange = () => {
      setIotDevices(loadDevicesFromStorage());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleSelectDevice = (deviceId) => {
    setIotDevices((previousDevices) => {
      const updatedDevices = incrementDeviceSelection(previousDevices, deviceId);
      saveDevicesToStorage(updatedDevices);
      return updatedDevices;
    });
  };

  const totalEnergy = iotDevices
    .reduce((sum, device) => sum + Number(device.energy || 0), 0)
    .toFixed(1);

  const averageEfficiency =
    iotDevices.length > 0
      ? Math.round(
          iotDevices.reduce((sum, device) => sum + Number(device.efficiency || 0), 0) /
            iotDevices.length
        )
      : 0;

  const totalInteractions = iotDevices.reduce(
    (sum, device) => sum + Number(device.selected || 0),
    0
  );

  return (
    <div className="combined-wrapper">
      <Container className="dashboard-container">
        <header className="dashboard-header">
          <div>
            <Badge bg="success" className="status-badge">
              REAL-TIME OVERVIEW
            </Badge>
            <h1>Smart Solar Energy Dashboard</h1>
          </div>

          <div className="summary-panel">
            <div>
              <span>Total Energy</span>
              <strong>{totalEnergy} kWh</strong>
            </div>
            <div>
              <span>Average Efficiency</span>
              <strong>{averageEfficiency}%</strong>
            </div>
            <div>
              <span>Total Interactions</span>
              <strong>{totalInteractions}</strong>
            </div>
          </div>
        </header>

        <Row className="g-4">
          {iotDevices.map((card) => (
            <Col key={card.id} xs={12} md={6} lg={4}>
              <IoTCard card={card} onSelect={handleSelectDevice} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CombinedPage;