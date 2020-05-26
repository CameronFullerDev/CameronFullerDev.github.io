import React from 'react';
import SmallCard from '../../component/card/small/SmallCard';
import { Container, Row, Col } from 'react-bootstrap'

function Projects() {


    return (
        <Container fluid className="light-bg page justify-content-center">
            <Row className="justify-content-center">
                <SmallCard Title="Numerous" Text="Backend, frontend &amp; mobile." Img={require('../../assets/Numerous.png')} Route="/projects/numerous" />
                <SmallCard Title="Payment Help" Text="Backend &amp; frontend." Img={require('../../assets/PaymentHelp.png')} Route="/projects/paymenthelp" />
                <SmallCard Title="Device Tracker Plus" Text="Backend, frontend &amp; mobile." Img={require('../../assets/DeviceTrackerPlus.png')} Route="/projects/numerous" />
            </Row>
            <Row className="justify-content-center">
                <SmallCard Title="Notes" Text="Mobile." Img={require('../../assets/Notes.png')} Route="/projects/notes" />
                <SmallCard Title="YoRecipe" Text="Backend, frontend &amp; mobile." Img={require('../../assets/YoRecipe.png')} Route="/projects/yorecipe" />
            </Row>
        </Container>
    );
}

export default Projects;
