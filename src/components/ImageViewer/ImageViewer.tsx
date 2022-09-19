import React, { useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import "./ImageViewer.css";
// const Close: string = require("../icons/close.svg").default;

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
        <CloseIcon width={40} height={40} onClick={() => setModel(false)} />
      </div>
      <img
        src={props.img}
        height={props.height}
        width={props.width}
        alt="image"
        onClick={() => getImg(props.img)}
      />
    </>
  );
};

export default ImageViewer;
