import React from 'react';
import { Card, Button, ProgressBar, Badge } from 'react-bootstrap';

function IoTCard({ card, onSelect }) {
  const isSelected = card.selected > 0;

  const getEfficiencyStatus = () => {
    if (card.efficiency >= 90) {
      return 'Optimal';
    }

    if (card.efficiency >= 80) {
      return 'Stable';
    }

    return 'Needs Check';
  };

  return (
    <Card className={`iot-card h-100 ${isSelected ? 'iot-card-selected' : ''}`}>
      <div className="image-wrapper">
        <Card.Img
          variant="top"
          src={card.image}
          alt={card.title}
          className="device-image"
        />
        <Badge bg={isSelected ? 'info' : 'secondary'} className="image-badge">
          {isSelected ? 'SELECTED' : 'READY'}
        </Badge>
      </div>

      <Card.Body>
        <div className="card-top-line">
          <span className="device-dot"></span>
          <span className="device-status">{getEfficiencyStatus()}</span>
        </div>

        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.description}</Card.Text>

        <div className="metric-block">
          <div className="metric-row">
            <span>Efficiency</span>
            <strong>{card.efficiency}%</strong>
          </div>
          <ProgressBar now={card.efficiency} className="efficiency-progress" />
        </div>

        <div className="energy-output">
          <span>Energy Produced</span>
          <strong>{card.energy} kWh</strong>
        </div>

        <div className="selection-counter">
          <span>Device selected</span>
          <strong>{card.selected} times</strong>
        </div>

        <Button
          variant={isSelected ? 'info' : 'outline-info'}
          className="details-button"
          onClick={() => onSelect(card.id)}
        >
          Select Device
        </Button>
      </Card.Body>
    </Card>
  );
}

export default IoTCard;