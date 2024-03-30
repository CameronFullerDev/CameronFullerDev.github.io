import { courses } from "../../data/courses";
import Chips from "./Chips";
import SmallSection from "./SmallSection";

export default function Courses() {
  return (
    <SmallSection title="Courses">
      <Chips chips={courses} />
    </SmallSection>
  );
}
