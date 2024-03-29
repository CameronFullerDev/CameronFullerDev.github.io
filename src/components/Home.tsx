import ReactRotatingText from "react-rotating-text";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const BannerContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 128px)",
  animation: "$backgroundAnimation 10s infinite alternate",
  background: "linear-gradient(to right, #ff7e5f, #feb47b)",
  "@keyframes backgroundAnimation": {
    "0%": {
      background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    },
    "50%": {
      background: "linear-gradient(to right, #74ebd5, #9face6)",
    },
    "100%": {
      background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    },
  },
  "@media (max-width: 600px)": {
    // Adjust height for mobile screens
    height: "calc(100vh - 112px)",
  },
});

const RotatingText = styled(Typography)({
  fontSize: "3rem",
  color: "white",
  textAlign: "center",
  marginBottom: "10rem",
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
      <RotatingText variant="h1">
        <ReactRotatingText items={text} />
      </RotatingText>
    </BannerContainer>
  );
}

export default Home;
