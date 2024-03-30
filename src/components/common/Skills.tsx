import { skills } from "../../data/skills";
import Chips from "./Chips";
import SmallSection from "./SmallSection";

export default function Skills() {
  return (
    <SmallSection title="My Skills">
      <Chips chips={skills} />
    </SmallSection>
  );
}
