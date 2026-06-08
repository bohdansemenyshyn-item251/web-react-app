import React from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';

function IoTCard({ title, description, efficiency, energyProduced }) {
  const getEfficiencyStatus = () => {
    if (efficiency >= 90) {
      return 'Optimal';
    }

    if (efficiency >= 80) {
      return 'Stable';
    }

    return 'Needs Check';
  };

  return (
    <Card className="iot-card h-100">
      <Card.Body>
        <div className="card-top-line">
          <span className="device-dot"></span>
          <span className="device-status">{getEfficiencyStatus()}</span>
        </div>

        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <div className="metric-block">
          <div className="metric-row">
            <span>Efficiency</span>
            <strong>{efficiency}%</strong>
          </div>
          <ProgressBar now={efficiency} className="efficiency-progress" />
        </div>

        <div className="energy-output">
          <span>Energy Produced</span>
          <strong>{energyProduced} kWh</strong>
        </div>

        <Button variant="outline-info" className="details-button">
          View Sensor Data
        </Button>
      </Card.Body>
    </Card>
  );
}

export default IoTCard;