import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "../component/ItemList";
import ExperienceEntry from "../component/ExperienceEntry";

import { summary } from "../content/about/Summary";
import { skills } from "../content/about/Skills";
import { experiences } from "../content/about/Experiences";
import { qualifications } from "../content/about/Qualifications";
import { additionalCourses } from "../content/about/AdditionalCourses";

import cv from "../assets/CameronFullerCV.pdf";

const numSkillColumns = 3;
const itemsPerSkillColumn = Math.ceil(skills.length / numSkillColumns);

class About extends React.Component {
  render() {
    return (
      <div className="py-2">
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
                  columnIndex * itemsPerSkillColumn,
                  (columnIndex + 1) * itemsPerSkillColumn,
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
      </div>
    );
  }
}

export default About;
