import React from "react";
import DarkBanner from "../component/DarkBanner";
function Home() {
  const text = [
    "Hello, I'm Cameron.",
    "I'm a software engineer.",
    "Nice to meet you.",
    "Let's connect.",
  ];

  return <DarkBanner Text={text} />;
}

export default Home;
