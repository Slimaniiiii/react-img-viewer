import React, { useState } from "react";
import "./ImageViewer.css";

interface imageProps {
  img: string;
  height?: number | string;
  width?: number | string;
  onClick?: () => void;
}

const ImageViewer = (props: imageProps) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (img: string) => {
    setTempImgSrc(img);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="image" />
      </div>
      <div className="wrapper">
        <div className="wrapper-images">
          <img
            src={props.img}
            height={props.height}
            width={props.width}
            alt="image"
            onClick={() => getImg(props.img)}
          />
        </div>
      </div>
    </>
  );
};

export default ImageViewer;
