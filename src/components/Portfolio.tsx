import { styled } from "@mui/system";
import { projects } from "../data/projects";
import { ProjectCard } from "./common/ProjectCard";

const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gridGap: "1rem",
  margin: "1rem",
});

export function Portfolio() {
  return (
    <GridContainer>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </GridContainer>
  );
}

export default Portfolio;
