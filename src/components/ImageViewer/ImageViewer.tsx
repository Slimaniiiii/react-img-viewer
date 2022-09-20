import React, { useState, useRef, useEffect } from "react";
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
  const imgRef = useRef(null);

  const getImg = (img: string) => {
    setTempImgSrc(img);
    setModel(true);
  };

  //function to move image
  const moveImage = (e: any) => {
    const container: any = imgRef.current;
    if(container) {
      container.style.cursor = "grabbing";
      container.style.left = e.pageX - container.offsetWidth / 2 + "px";
      container.style.top = e.pageY - container.offsetHeight / 2 + "px";
    }
  };

  
  
  // useEffect(()=> {
  //   const closeModel = (e: any) => {
  //     if (imgRef.current === e.target) {
  //       setModel(false);
  //     }
  //   };
  //   window.addEventListener("click", closeModel);
  //   return () => window.removeEventListener("click", closeModel);
  // }, []);


  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img ref={imgRef} src={tempImgSrc} alt="image" />
        <CloseIcon width={30} height={30} onClick={() => setModel(false)} />
      </div>
      <div className="images">
        <img
          id="img_id"
          src={props.img}
          height={props.height}
          width={props.width}
          alt="image"
          onChange={e =>moveImage(e)}
          onClick={() => getImg(props.img)}
        />
      </div>
    </>
  );
};

export default ImageViewer;
