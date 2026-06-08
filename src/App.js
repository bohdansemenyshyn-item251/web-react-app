import './App.css';
import Menu from "./components/menu/Menu";
import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import IoTCard from './components/iot-card/IoTCard';

function App() {
  const iotDevices = [
    {
      title: 'Solar Panel Unit A',
      description:
        'Rooftop photovoltaic module connected to the IoT gateway. Tracks sunlight conversion, voltage stability, and live energy output.',
      efficiency: 94,
      energyProduced: 128.6,
    },
    {
      title: 'Solar Panel Unit B',
      description:
        'Secondary solar array with smart sensor monitoring for panel temperature, inverter response, and production consistency.',
      efficiency: 89,
      energyProduced: 112.4,
    },
    {
      title: 'Battery Storage System',
      description:
        'Lithium battery storage node collecting charge level, discharge flow, backup capacity, and grid support information.',
      efficiency: 86,
      energyProduced: 74.2,
    },
    {
      title: 'Smart Energy Meter',
      description:
        'Digital energy metering device that visualizes real-time consumption, exported power, and total system performance.',
      efficiency: 91,
      energyProduced: 98.9,
    },
    {
      title: 'Wind Turbine',
      description:
        'Hybrid renewable IoT node that measures wind-assisted generation, rotor activity, and contribution to total energy balance.',
      efficiency: 82,
      energyProduced: 64.7,
    },
  ];

  const totalEnergy = iotDevices
    .reduce((sum, device) => sum + device.energyProduced, 0)
    .toFixed(1);

  const averageEfficiency = Math.round(
    iotDevices.reduce((sum, device) => sum + device.efficiency, 0) /
      iotDevices.length
  );

  return (
    <div className="app-wrapper">
      <Container className="dashboard-container">
        <header className="dashboard-header">
          <div>
            <Badge bg="success" className="status-badge">
              LIVE IOT MONITORING
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
          </div>
        </header>

        <Row className="g-4">
          {iotDevices.map((device, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <IoTCard
                title={device.title}
                description={device.description}
                efficiency={device.efficiency}
                energyProduced={device.energyProduced}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;