import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import ReactRotatingText from 'react-rotating-text'
import './DarkBanner.css'


function DarkBanner(props) {
    return (
        <Container fluid className="banner dark-bg page">
            <Row className="justify-content-center">
                <Col md={3} style={{ position: "relative", bottom: "-27vh", color: "white" }}>
                    <h1><ReactRotatingText items={props.Text} /></h1>
                </Col>
            </Row>
        </Container>
    )
}

export default DarkBanner;
