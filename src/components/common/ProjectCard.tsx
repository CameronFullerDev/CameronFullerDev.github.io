import { Card, CardContent, Typography, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";

interface Project {
  img: string;
  title: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={project.img} alt={project.title} />}
        title={project.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
