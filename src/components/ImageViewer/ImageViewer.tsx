import React, { useState, useRef, useEffect } from "react";
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

  let gMouseDownX = 0;
  let gMouseDownY = 0;
  let gMouseDownOffsetX = 0;
  let gMouseDownOffsetY = 0;

  function addListeners() {
    let doc: any = document.getElementById("testimg");
    doc.addEventListener("mousedown", mouseDown, false);
    window.addEventListener("mouseup", mouseUp, false);
  }

  function mouseUp() {
    window.removeEventListener("mousemove", divMove, true);
  }

  function mouseDown(e: any) {
    gMouseDownX = e.clientX;
    gMouseDownY = e.clientY;

    let div: any = document.getElementById("testimg");

    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    let leftPart = "";
    if (!div.style.left)
      leftPart += "0px"; //In case this was not defined as 0px explicitly.
    else leftPart = div.style.left;
    let leftPos = leftPart.indexOf("px");
    let leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
    gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString, 10);

    //The following block gets the Y offset (the difference between where it starts and where it was clicked)
    let topPart = "";
    if (!div.style.top)
      topPart += "0px"; //In case this was not defined as 0px explicitly.
    else topPart = div.style.top;
    let topPos = topPart.indexOf("px");
    let topNumString = topPart.slice(0, topPos); // Get the Y value of the object.
    gMouseDownOffsetY = gMouseDownY - parseInt(topNumString, 10);

    window.addEventListener("mousemove", divMove, true);
  }
  function divMove(e: any) {
    let div = document.getElementById("testimg");
    if (div) {
      div.style.position = "absolute";
      let topAmount = e.clientY - gMouseDownOffsetY;
      div.style.top = topAmount + "px";
      let leftAmount = e.clientX - gMouseDownOffsetX;
      div.style.left = leftAmount + "px";
    }
  }

  useEffect(() => {
    addListeners();
  }, []);

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
