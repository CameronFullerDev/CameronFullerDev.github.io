import React from "react";
import ContentBanner from "../component/ContentBanner";

function NotFound() {
  const text = [
    "Error code: 404",
    "Sorry, looks like the page you were looking for doesn't exist.",
  ];
  return <ContentBanner Text={text} />;
}

export default NotFound;
