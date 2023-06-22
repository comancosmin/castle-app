import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const Error = () => {
  return (
    <div className="error-404">
      <h1>
        4<FiAlertTriangle color="yellow"></FiAlertTriangle>4
      </h1>
      <h2>Error: 404 page not found</h2>
      <p>Sorry, the page you're looking for cannot be accessed</p>
    </div>
  );
};

export default Error;
