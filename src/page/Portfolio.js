import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import ProjectCard from "../component/card/ProjectCard";
import projects from "../content/Portfolio";

function Projects() {
  return (
    <Container fluid className="light-bg page justify-content-center">
      <CardColumns style={{ padding: "3vh" }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </CardColumns>
    </Container>
  );
}

export default Projects;
