import React, { useState, useRef } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";
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
  const imgRef = useRef(null);

  const getImg = (img: string) => {
    setTempImgSrc(img);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img ref={imgRef} src={tempImgSrc} alt="image" />
        <CloseIcon width={30} height={30} onClick={() => setModel(false)} />
        <div className="configIcons">
          <ArrowLeft width={30} height={30} />
          <ArrowRight width={30} height={30} />
        </div>
      </div>
      <div className="images">
        <img
          id="img_id"
          src={props.img}
          height={props.height}
          width={props.width}
          alt="image"
          onClick={() => getImg(props.img)}
        />
      </div>
    </>
  );
};

export default ImageViewer;
