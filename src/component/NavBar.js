import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import cv from "../assets/CameronFullerCV.pdf";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="nav">
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
    </Navbar>
  );
}

export default NavBar;
