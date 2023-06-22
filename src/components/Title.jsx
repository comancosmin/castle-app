import React from "react";

const Title = ({ currentItem }) => {
  return (
    <div className="title">
      <h1>{currentItem.title}</h1>
      <p>{currentItem.description}</p>
    </div>
  );
};

export default Title;
