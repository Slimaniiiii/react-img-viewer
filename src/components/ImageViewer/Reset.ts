export const Reset = () => {
  const img: any = document.getElementById("testimg");
  const rotate: any = document.getElementById("rotate");
  const ts = {
    scale: 1,
    rotate: 0,
    translate: {
      x: 0,
      y: 0,
    },
  };
  ts.scale = 1;
  ts.rotate = 0;
  ts.translate = {
    x: 0,
    y: 0,
  };
  rotate.value = 180;
  img.style.transform = "none";
};
