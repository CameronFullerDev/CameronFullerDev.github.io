import React from "react";
import { Card } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const ProjectCard = ({ img, title, description, urls, theme }) => {
  return (
    <Card bg={theme} text={theme === "light" ? "dark" : "light"}>
      <Card.Body>
        <Card.Img
          src={img}
          style={{ maxWidth: "60px", maxHeight: "60px", marginBottom: "2vh" }}
          alt=""
        />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {urls.map((url, index) => (
          <SocialIcon key={index} url={url} />
        ))}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
