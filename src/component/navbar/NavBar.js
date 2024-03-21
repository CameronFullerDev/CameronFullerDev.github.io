import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

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
          <Nav.Link href="projects">
            <span>Projects</span>
          </Nav.Link>
          <Nav.Link href="mailto:cameron-fuller@hotmail.com?subject=Let's%20talk">
            <span>Contact</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
