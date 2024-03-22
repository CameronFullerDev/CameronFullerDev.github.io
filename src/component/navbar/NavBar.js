import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

import cv from "../../assets/CameronFullerCV.pdf";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="nav">
      <Navbar.Brand href="/">
        <img
          src={require("../../assets/logo.png")}
          style={{ height: "3.5vh" }}
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="about">
            <span>About</span>
          </Nav.Link>
          <Nav.Link href="portfolio">
            <span>Portfolio</span>
          </Nav.Link>
          <Nav.Link href={cv} download="CameronFullerCV.pdf">
            <span>CV</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
