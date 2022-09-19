import React, { useState } from "react";
import "./ImageViewer.css";

interface imageProps {
  img: string;
  height?: number | string;
  width?: number | string;
  onClick?: () => void;
}

const ImageViewer = (props: imageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  function handleClick(img: string) {
    console.log(img);
    setIsLoaded(true);
  }

  console.log("isLoaded", isLoaded);
  return (
    <div className="wrapper">
      <div className="wrapper-images">
        <img
          src={props.img}
          height={props.height}
          width={props.width}
          alt="image"
          onClick={() => handleClick(props.img)}
        />
      </div>
    </div>
  );
};

export default ImageViewer;
