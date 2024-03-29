import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const CardContainer = styled(Card)({
  maxWidth: 345,
});

const Media = styled(CardMedia)({
  padding: "10px",
  height: 60,
  width: 60,
  maxWidth: 60,
  maxHeight: 60,
  margin: "1rem",
  backgroundSize: "contain",
  borderRadius: "15%",
});

export function ProjectCard(props: any) {
  return (
    <CardContainer>
      <CardActionArea>
        <Media image={props.project.img} title={props.project.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}
