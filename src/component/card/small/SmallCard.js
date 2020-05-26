import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './SmallCard.css'

function SmallCard(props) {
    return (
        <a href={props.Route}>
            <Card className="small-card" style={{ width: '18rem', margin: '12px' }}>
                <Card.Img variant="top" src={props.Img} alt="Coming soon" />
                <Card.Body>
                    <Card.Title>{props.Title}</Card.Title>
                    <Card.Text>{props.Text}</Card.Text>
                </Card.Body>
            </Card>
        </a>
    )
}

export default SmallCard;