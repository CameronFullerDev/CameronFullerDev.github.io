import ReactRotatingText from "react-rotating-text";

function Home() {
  const text = [
    "Hello, I'm Cameron.",
    "I'm a software engineer.",
    "Nice to meet you.",
    "Let's connect.",
  ];

  return (
    <div className="banner">
      <ReactRotatingText items={text} />
    </div>
  );
}

export default Home;
