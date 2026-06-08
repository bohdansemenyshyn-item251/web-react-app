import React, { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import IoTCard from './components/iot-card/IoTCard';
import './App.css';

function App() {
  const [iotDevices, setIotDevices] = useState([
    {
      id: 1,
      title: 'Solar Panel Unit A',
      description:
        'Primary rooftop photovoltaic module that monitors sunlight conversion, panel voltage, temperature, and real-time solar energy output.',
      efficiency: 94,
      energy: 128.6,
      image: '/images/solar-panel.jpg',
      selected: 0,
    },
    {
      id: 2,
      title: 'Solar Panel Unit B',
      description:
        'Secondary solar panel unit connected to the IoT gateway for monitoring inverter response, sunlight intensity, and production stability.',
      efficiency: 89,
      energy: 112.4,
      image: '/images/solar-panel.jpg',
      selected: 0,
    },
    {
      id: 3,
      title: 'Battery Storage System',
      description:
        'Smart battery storage system that tracks charge level, discharge load, backup capacity, and energy availability for the microgrid.',
      efficiency: 86,
      energy: 74.2,
      image: '/images/battery.jpg',
      selected: 0,
    },
    {
      id: 4,
      title: 'Smart Energy Meter',
      description:
        'Digital metering device that collects electricity consumption data, exported power values, and total renewable system performance.',
      efficiency: 91,
      energy: 98.9,
      image: '/images/meter.jpg',
      selected: 0,
    },
    {
      id: 5,
      title: 'Wind Turbine',
      description:
        'Hybrid renewable IoT unit that measures wind-assisted generation, rotor activity, and contribution to the total energy balance.',
      efficiency: 82,
      energy: 64.7,
      image: '/images/wind-turbine.jpg',
      selected: 0,
    },
  ]);

  const handleSelectDevice = (deviceId) => {
    setIotDevices((previousDevices) =>
      previousDevices.map((device) =>
        device.id === deviceId
          ? { ...device, selected: device.selected + 1 }
          : device
      )
    );
  };

  const totalEnergy = iotDevices
    .reduce((sum, device) => sum + device.energy, 0)
    .toFixed(1);

  const averageEfficiency = Math.round(
    iotDevices.reduce((sum, device) => sum + device.efficiency, 0) /
      iotDevices.length
  );

  const totalInteractions = iotDevices.reduce(
    (sum, device) => sum + device.selected,
    0
  );

  return (
    <div className="app-wrapper">
      <Container className="dashboard-container">
        <header className="dashboard-header">
          <div>
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

export default App;