import Hero from "./common/Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import EmploymentHistory from "./EmploymentHistory";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <EmploymentHistory />
      <Portfolio />
    </div>
  );
}
