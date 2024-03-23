import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import ProjectCard from "../component/ProjectCard";
import { projects } from "../content/portfolio/Projects";

function Projects() {
  return (
    <Container fluid>
      <CardColumns>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </CardColumns>
    </Container>
  );
}

export default Projects;
