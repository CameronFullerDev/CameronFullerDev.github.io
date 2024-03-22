import React from "react";
import DarkBanner from "../component/banner/dark/DarkBanner";

function NotFound() {
  const text = [
    "Error code: 404",
    "Sorry, looks like the page you were looking for doesn't exist.",
  ];
  return <DarkBanner Text={text} />;
}

export default NotFound;
