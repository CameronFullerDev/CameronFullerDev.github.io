import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import Typography from "@mui/material/Typography";
import { employmentHistory } from "../../data/employmentHistory";

export default function EmploymentTimeline() {
  return (
    <Timeline position="alternate">
      {employmentHistory.map((experience, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography color="textSecondary">{experience.duration}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {index < employmentHistory.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">{experience.title}</Typography>
            <Typography variant="subtitle1">{experience.company}</Typography>
            <Typography>{experience.location}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
