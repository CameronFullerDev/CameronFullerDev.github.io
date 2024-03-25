import React from "react";
import { CardColumns } from "react-bootstrap";
import ProjectCard from "../component/ProjectCard";
import { projects } from "../content/portfolio/Projects";
import { useTheme } from "../contexts/ThemeContext";
function Projects() {
  const theme = useTheme(); // Access the theme from context

  console.log(theme);

  return (
    <CardColumns className="py-2 px-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} theme={theme.theme} />
      ))}
    </CardColumns>
  );
}

export default Projects;
