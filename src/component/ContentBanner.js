import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactRotatingText from "react-rotating-text";
import { useTheme } from "../contexts/ThemeContext";

function ContentBanner(props) {
  const { theme } = useTheme();

  return (
    <Container fluid className={theme + "-banner"}>
      <Row className="justify-content-center">
        <Col
          md={4}
          style={{ position: "relative", bottom: "-30vh", color: "white" }}
        >
          <h1 className="text-center">
            <ReactRotatingText items={props.Text} />
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default ContentBanner;
