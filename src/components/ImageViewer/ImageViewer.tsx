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
  const imgRef: any = useRef(null);

  //get image size
  const imgSize = () => {
    const imgSepcs = document.getElementById("img_id");
    if (imgSepcs) {
      let height = imgSepcs.clientHeight;
      let width = imgSepcs.clientWidth;
      let screenHeight = window.innerHeight;
      let screenWidth = window.innerWidth;
      if (height > screenHeight || width > screenWidth) {
        height = (screenHeight * 80) / 100;
        width = (screenWidth * 80) / 100;
      }
      return { height, width };
    }
  };
  const setImgSize = () => {
    const { height, width }: any = imgSize();
    const modelImg: any = document.querySelector(".model img");
    modelImg.style.height = `${height}px`;
    modelImg.style.width = `${width}px`;
  };
  const getImg = (img: string) => {
    setTempImgSrc(img);
    setModel(true);
    setImgSize();
  };

  function addListeners() {
    let testi: any = document.getElementById("testimg");
    testi.addEventListener("mousedown", mouseDown, false);
    window.addEventListener("mouseup", mouseUp, false);
  }
  function mouseUp() {
    window.removeEventListener("mousemove", divMove, true);
  }

  function mouseDown() {
    window.addEventListener("mousemove", divMove, true);
  }

  function divMove(e: any) {
    let div: any = document.getElementById("testi");
    div.style.position = "absolute";
    div.style.top = e.clientY + "px";
    div.style.left = e.clientX + "px";
  }
  addListeners();
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img id="testimg" ref={imgRef} src={tempImgSrc} alt="image" />
        <CloseIcon
          id="closesvg"
          width={30}
          height={30}
          onClick={() => setModel(false)}
        />
        <div className="configIcons">
          <ArrowLeft width={25} height={25} />
          <ArrowRight width={25} height={25} />
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
