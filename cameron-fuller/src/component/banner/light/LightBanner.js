import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './LightBanner.css'
import SmallCard from '../../card/small/SmallCard'


function LightBanner(props) {
    return (
        <Container fluid className="banner light-bg">
            <Row className="justify-content-center" style={{ position: "relative", bottom: "-10vh" }}>
                <h1>{props.Heading}</h1>
            </Row>
        </Container>
    )
}

export default LightBanner;