import React from "react";
import { Card } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const ProjectCard = ({ img, title, description, urls }) => (
  <Card>
    <Card.Body>
      <Card.Img src={img} style={{ maxWidth: "6vh", maxheight: "5vh", marginBottom: "2vh" }} alt="" />
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      {urls.map((url, index) => (
        <SocialIcon key={index} url={url} />
      ))}
    </Card.Body>
  </Card>
);

export default ProjectCard;
