import React from 'react';
import DarkBanner from '../component/banner/dark/DarkBanner';
import { Container, Row, Col } from 'react-bootstrap'
import SmallCard from '../component/card/small/SmallCard'



function Home() {

  const text = ["Hello, I'm Cameron.", "I'm a developer.", "Nice to meet you."]
  return (
    <div>
      <DarkBanner Text={text} />
      <Container fluid className="light-bg page justify-content-center">
            <Row className="justify-content-center">
                <SmallCard Title="Numerous" Text="Backend, frontend &amp; mobile." Img={require('../assets/Numerous.png')} Route="/projects/numerous" />
                <SmallCard Title="Payment Help" Text="Backend &amp; frontend." Img={require('../assets/PaymentHelp.png')} Route="/projects/paymenthelp" />
                <SmallCard Title="Device Tracker Plus" Text="Backend, frontend &amp; mobile." Img={require('../assets/DeviceTrackerPlus.png')} Route="/projects/numerous" />
            </Row>
            <Row className="justify-content-center" style={{ position: "relative" }}>
        <a href="/projects">View all</a>
        </Row>
        </Container>
    </div>
  );
}

export default Home;
