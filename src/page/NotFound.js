import React from 'react';
import DarkBanner from '../component/banner/dark/DarkBanner';

function NotFound() {
  const text = ["Sorry, looks like the page you were looking for doesn't exist.", "Error code: 404"]
    return (
      <DarkBanner Text={text} />
    );
  }

export default NotFound;
