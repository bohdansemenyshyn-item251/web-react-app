import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

function AnalyticsPage() {
  const analytics = [
    {
      label: 'Solar Generation',
      value: 92,
      description: 'Current performance level of photovoltaic units.',
    },
    {
      label: 'Battery Storage Load',
      value: 76,
      description: 'Estimated storage utilization based on the current energy balance.',
    },
    {
      label: 'Grid Export Ratio',
      value: 64,
      description: 'Part of produced energy exported from the local system.',
    },
    {
      label: 'Consumption Optimization',
      value: 81,
      description: 'Efficiency of balancing energy production and usage.',
    },
  ];

  return (
    <Container className="dashboard-container">
      <section className="page-header-panel">
        <h1>Energy Analytics</h1>
        <p>
          The analytics page visualizes statistical indicators of the IoT solar
          energy system and helps evaluate system efficiency.
        </p>
      </section>

      <Row className="g-4">
        {analytics.map((item, index) => (
          <Col key={index} xs={12} md={6}>
            <div className="analytics-card">
              <div className="metric-row">
                <span>{item.label}</span>
                <strong>{item.value}%</strong>
              </div>
              <ProgressBar now={item.value} className="efficiency-progress" />
              <p>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AnalyticsPage;