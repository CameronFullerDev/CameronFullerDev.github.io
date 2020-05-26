import React from 'react';
import { Card, Button, Container, Row } from 'react-bootstrap'
import './LargeCard.css'

function LargeCard(props) {
    return (
        <Container fluid className="dark-bg page">
            <Row className="justify-content-center">
                            <Card className="large-card page" style={{ width: '80rem' }}>
                            <Card.Img variant="top" src={props.Img} alt="Coming soon" style={{ width: '10rem', height: '10rem', margin: 'auto' }} />
                            <Card.Body>
                                <Card.Title className="text-center">{props.Title}</Card.Title>
                                <Card.Text style={{ margin: 'auto' }} >{props.Text}</Card.Text>
                            </Card.Body>
                        </Card>
            </Row>
        </Container>
    )
}

export default LargeCard;