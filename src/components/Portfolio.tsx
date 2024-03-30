import { Masonry } from "@mui/lab";
import { projects } from "../data/projects";
import ProjectCard from "./common/ProjectCard";
import Section from "./common/Section";

export default function Portfolio() {
  return (
    <Section
      title="Projects"
      description="Here you will find some of the personal and clients projects that I
have worked on, Whether you're curious or looking for collaboration
opportunities, this is the place to see what I've been working on."
    >
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Masonry>
    </Section>
  );
}
