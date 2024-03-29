import React from "react";
import ReactRotatingText from "react-rotating-text";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const BannerContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 128px)", // Adjust this value according to your needs
  animation: "$backgroundAnimation 10s infinite alternate", // Apply animation
  background: "linear-gradient(to right, #ff7e5f, #feb47b)", // Initial background color
  "@keyframes backgroundAnimation": {
    "0%": {
      background: "linear-gradient(to right, #ff7e5f, #feb47b)", // Initial color
    },
    "50%": {
      background: "linear-gradient(to right, #74ebd5, #9face6)", // Intermediate color
    },
    "100%": {
      background: "linear-gradient(to right, #ff7e5f, #feb47b)", // Final color
    },
  },
});

const RotatingText = styled(Typography)({
  fontSize: "2rem", // Adjust font size as needed
  color: "white", // Text color set to white
});

function Home() {
  const text = [
    "Hello, I'm Cameron.",
    "I'm a software engineer.",
    "Nice to meet you.",
    "Let's connect.",
  ];

  return (
    <BannerContainer>
      <RotatingText variant="h1" align="center">
        <ReactRotatingText items={text} />
      </RotatingText>
    </BannerContainer>
  );
}

export default Home;
