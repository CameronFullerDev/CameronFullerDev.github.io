import React from "react";
import { Navbar } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

function Footer() {
  return (
    <Navbar bg="light" className="footer">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
