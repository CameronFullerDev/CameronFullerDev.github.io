import React from "react";
import ContentBanner from "../component/ContentBanner";
function Home() {
  const text = [
    "Hello, I'm Cameron.",
    "I'm a software engineer.",
    "Nice to meet you.",
    "Let's connect.",
  ];

  return <ContentBanner Text={text} />;
}

export default Home;
