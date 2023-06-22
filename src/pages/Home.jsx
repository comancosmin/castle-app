import React, { useState } from "react";
//import components
import Title from "../components/Title";
import Info from "../components/Info";
import Image from "../components/Image";
//import Data
import data from "../data";

const Home = () => {
  //States
  const [items, setItems] = useState(data()); //title, info and image
  const [currentItem, setCurrentItem] = useState(items[1]);

  return (
    <div className="content">
      <Title className="title" currentItem={currentItem} />
      <Info className="info-grid" currentItem={currentItem} />
      <Image
        className="image"
        currentItem={currentItem}
        setItems={setItems}
        setCurrentItem={setCurrentItem}
      />
    </div>
  );
};

export default Home;
