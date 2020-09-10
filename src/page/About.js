import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class About extends React.Component {
    render() {
        return (
            <Container fluid className="page" style={{ padding: "3vh" }}>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <h1>About me</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <p>
                                Hi I'm Cameron, I work as a software developer for <a href="http://www.numerous.app/">Numerous Technology. </a> 
                                Before that, I was a software developer apprentice working on my professional development &amp; qualifications while on the job.
                                But that's just professionally, I've actually been programming from the age of 11, since the day my Dad challenged me to write a 
                                program to make a ball bounce on the screen, I've known what I wanted to do with my life, it's engrained in who I am.
                                I have a passion for product design, problem solving and creating intelligent solutions. My desire for knowledge and determination 
                                to turn information into action has contributed to my success at my company, in building innovative new products to quickly impact the target market.
                            </p>

         
                            

                            <div>
                                <h3>Achievements &amp; qualifications</h3>
                                <ul>
                                    <li>
                                        <a href="https://www.youracclaim.com/badges/ee8e1120-348d-47e9-a194-289d109b7651/public_url">MS - Advanced programming in C#</a>
                                    </li>
                                    <li>
                                        BCS - Level 4 diploma in software development
                                    </li>
                                    <li>
                                        BCS - Level 4 diploma in software development methodologies
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <h3>Courses</h3>
                                <ul>
                                    <li>
                                        App &amp; Web Development Fundamentals
                                    </li>
                                    <li>
                                        Firebrand Scrum Master Training
                                    </li>
                                    <li>
                                        ISTQB Software Testing
                                    </li>
                                    <li>
                                        MCSA SQL Database Development
                                    </li>
                                    <li>
                                        MTA Database Fundamentals
                                    </li>
                                    <li>
                                        Microsoft Advanced Programming in C#
                                    </li>
                                    <li>
                                        Multiple Twilio superclasses
                                    </li>
                                    <li>
                                        Principles of Team Leading
                                    </li>
                                </ul>
                            </div>



                        </Col>
                    </Row>
            </Container>
        );
    }
}

export default About;
