import React from 'react';
import ReactRotatingText from 'react-rotating-text'
import { Container, Row, Col } from 'react-bootstrap'
import DarkBanner from '../component/banner/dark/DarkBanner';

function NotFound() {
  const text = ["Sorry, looks like the page you were looking for doesn't exist.", "Error code: 404"]
    return (
      <DarkBanner Text={text} />
    );
  }

export default NotFound;
