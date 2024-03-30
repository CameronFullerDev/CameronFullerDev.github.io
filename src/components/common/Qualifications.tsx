import { qualifications } from "../../data/qualifications";
import Chips from "./Chips";
import SmallSection from "./SmallSection";

export default function Qualifications() {
  return (
    <SmallSection title="Qualifications">
      <Chips chips={qualifications} />
    </SmallSection>
  );
}
