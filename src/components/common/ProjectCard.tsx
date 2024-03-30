import { Card, CardContent, Typography, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";

interface Project {
  img: string;
  title: string;
  description: string;
  urls: string[];
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
      <CardActions>
        {project.urls.map((url, index) => (
          <IconButton key={index} aria-label={url} href={url}>
            <ShareIcon />
          </IconButton>
        ))}
      </CardActions>
    </Card>
  );
}
