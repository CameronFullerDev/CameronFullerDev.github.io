import React from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";

import cv from "../assets/CameronFullerCV.pdf";
import { useTheme } from "../contexts/ThemeContext";

function NavBar() {
  const { theme, setTheme } = useTheme();

  const themeSwitcherVariant = {
    light: "outline-primary",
    dark: "outline-light",
  };

  return (
    <Navbar
      bg={theme}
      variant={theme}
      expand="lg"
      sticky="top"
      style={{ color: theme === "light" ? "#000000" : "#ffffff" }}
      className="nav"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="/" aria-label="home">
            <span>Home</span>
          </Nav.Link>
          <Nav.Link href="about" aria-label="about">
            <span>About</span>
          </Nav.Link>
          <Nav.Link href="portfolio" aria-label="portfolio">
            <span>Portfolio</span>
          </Nav.Link>
          <Nav.Link
            href={cv}
            download="CameronFullerCV.pdf"
            aria-label="Download my CV"
          >
            <span>CV</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Button
        variant={themeSwitcherVariant[theme]}
        onClick={() => setTheme(theme)}
      >
        Swap to {theme === "light" ? "dark" : "light"} mode
      </Button>
    </Navbar>
  );
}

export default NavBar;
