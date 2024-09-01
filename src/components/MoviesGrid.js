import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const MoviesGrid = () => {
  return (
    <Row>
      {/* Repeat this Col for each movie */}
      <Col md={4} lg={3} sm={6} xs={12}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="moviePoster.jpg" />
          <Card.Body>
            <Card.Title>Movie Title</Card.Title>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MoviesGrid;
