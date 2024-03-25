import React from "react";
import { Navbar } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { useTheme } from "../contexts/ThemeContext";

function Footer() {
  const { theme } = useTheme();

  return (
    <Navbar bg={theme} variant={theme} expand="lg">
      <SocialIcon
        className="social-icon"
        url="https://www.linkedin.com/in/cameron-fuller-455052141/"
      />
      <SocialIcon
        className="social-icon"
        url="mailto:cameron-fuller@hotmail.com"
      />
    </Navbar>
  );
}

export default Footer;
