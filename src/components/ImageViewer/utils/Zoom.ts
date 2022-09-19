let width: number = 100;
let difference: number = 2;
let intervalID: any = 0;

export const increase = (imageElement: any) => {
  const zoomIn = () => {
    if (width < 200) {
      width += difference;
      imageElement.style.width = width;
    } else {
      clearInterval(intervalID);
    }
  };

  intervalID = setInterval(zoomIn, 20);
};
