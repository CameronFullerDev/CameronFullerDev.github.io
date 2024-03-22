import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "../component/util/ItemList";
import ExperienceEntry from "../component/util/ExperienceEntry";
import {
  summary,
  numSkillColumns,
  itemsPerColumn,
  skills,
  experiences,
  qualifications,
  additionalCourses,
} from "../content/About";

import cv from "../assets/CameronFullerCV.pdf";

class About extends React.Component {
  render() {
    return (
      <Container fluid className="page" style={{ padding: "3vh" }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <h3>Summary</h3>
            <p>{summary}</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <h3>Skills</h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {[...Array(numSkillColumns)].map((_, columnIndex) => (
            <Col md={6 / numSkillColumns} key={columnIndex}>
              <ItemList
                items={skills.slice(
                  columnIndex * itemsPerColumn,
                  (columnIndex + 1) * itemsPerColumn,
                )}
              />
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <h3>Experience</h3>
            {experiences.map((experience, index) => (
              <ExperienceEntry key={index} experience={experience} />
            ))}
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <h3>Professional Qualifications</h3>
            <ul>
              {qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <h3>Additional Courses</h3>
            <ul>
              {additionalCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <p>Additional information & references available on request.</p>
            <a href={cv} download="CameronFullerCV.pdf">
              Download My CV Here
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
