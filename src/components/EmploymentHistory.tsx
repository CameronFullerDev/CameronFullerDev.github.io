import EmploymentTimeline from "./common/EmploymentTimeline";
import Section from "./common/Section";

export default function EmploymentHistory() {
  return (
    <Section
      title="Employment History"
      description="Here you'll discover a concise snapshot of my career journey. Dive into the timeline below to explore my progression from Apprentice Software Developer to Senior Lead Software Engineer."
    >
      <EmploymentTimeline />
    </Section>
  );
}
