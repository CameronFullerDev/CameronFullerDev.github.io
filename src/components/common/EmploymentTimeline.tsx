import React, { useState } from "react";
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
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { employmentHistory } from "../../data/employmentHistory";

interface Experience {
  id?: string | number;
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities?: string[];
}

export default function EmploymentTimeline() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {},
  );

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Timeline position="alternate" aria-label="Employment history timeline">
      {employmentHistory.map((experience: Experience, index: number) => {
        const isExpanded = expandedItems[index] || false;

        return (
          <TimelineItem key={experience.id ?? index}>
            <TimelineOppositeContent>
              <Typography color="textSecondary" variant="body2">
                {experience.duration}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {index < employmentHistory.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ mb: 2 }}>
              <Typography variant="h6">{experience.title}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {experience.company}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {experience.location}
              </Typography>

              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <ul
                  style={{
                    paddingLeft: "1rem",
                    marginTop: 0,
                    textAlign: "left",
                  }}
                >
                  {experience.responsibilities?.map((resp, i) => (
                    <li key={i}>
                      <Typography variant="body2">{resp}</Typography>
                    </li>
                  ))}
                </ul>
              </Collapse>

              {experience.responsibilities && (
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => toggleExpand(index)}
                  sx={{ mt: 1 }}
                  aria-expanded={isExpanded}
                  aria-controls={`responsibilities-list-${index}`}
                  aria-label={
                    isExpanded
                      ? "Show less responsibilities"
                      : "Show more responsibilities"
                  }
                  endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                  {isExpanded ? "Show less" : "Show more"}
                </Button>
              )}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
