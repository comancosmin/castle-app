import React from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Info = ({ currentItem }) => {
  return (
    <>
      <div className="container-info">
        <div className="info">
          <h3>Location</h3>
          <p>Berlin, Germany</p>
        </div>
        <div className="info">
          <h3>Construction Year</h3>
          <p>1877-1883</p>
        </div>
        <div className="info">
          <h3>Status</h3>
          <p>Open to public</p>
        </div>
        <div className="search">
          <IoPaperPlaneOutline color="white" size="35" />
        </div>
        <div
          className="gradient"
          style={{
            background: `linear-gradient(40deg, ${currentItem.color[0]}, ${currentItem.color[1]})`,
            boxShadow: `-10px 20px 100px 1px ${currentItem.color[0]}, 10px -20px 100px 1px ${currentItem.color[1]}`,
          }}
        />
      </div>
    </>
  );
};

export default Info;
