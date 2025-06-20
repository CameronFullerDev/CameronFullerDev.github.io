import EmploymentTimeline from "./common/EmploymentTimeline";
import Section from "./common/Section";

export default function EmploymentHistory() {
  return (
    <Section
      title="Employment History"
      description="Here you'll discover a concise snapshot of my career journey."
    >
      <EmploymentTimeline />
    </Section>
  );
}
