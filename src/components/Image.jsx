import React from "react";

const Image = ({ currentItem }) => {
  return (
    <>
      <div className="image">
        <img
          className="place-image"
          src={currentItem.image}
          alt={currentItem.image}
        ></img>
      </div>
    </>
  );
};

export default Image;
