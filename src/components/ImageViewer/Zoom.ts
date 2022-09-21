
export const Zoom = () => {
  const img: any = document.getElementById("testimg");
  const rotate: any = document.getElementById('rotate');

//   let mouseX;
//   let mouseY;
//   let mouseTX;
//   let mouseTY;
//   let startXOffset = 222.6665;
//   let startYOffset = 224.713;
//   let startX = 0;
//   let startY = 0;
//   let panning = false;

  const ts = {
    scale: 1,
    rotate: 0,
    translate: {
      x: 0,
      y: 0,
    },
  };

  img.onwheel = function (event: any) {

    event.preventDefault();
    //need more handling  to avoid fast scrolls
    var func = img.onwheel;
    img.onwheel = null;

    let rec = img.getBoundingClientRect();
    let x = (event.clientX - rec.x) / ts.scale;
    let y = (event.clientY - rec.y) / ts.scale;

    let delta = event.wheelDelta ? event.wheelDelta : -event.deltaY;
    ts.scale = delta > 0 ? ts.scale + 0.2 : ts.scale - 0.2;
    if (ts.scale < 0.2) {
        ts.scale = 0.2;
    }

    //let m = (ts.scale - 1) / 2;
    let m = delta > 0 ? 0.1 : -0.1;
    ts.translate.x += -x * m * 2 + img.offsetWidth * m;
    ts.translate.y += -y * m * 2 + img.offsetHeight * m;
    setTransform();
    img.onwheel = func;

  };
  rotate.oninput = function(event: any) {
    event.preventDefault();
    ts.rotate = event.target.value;
    setTransform();
  };

  function setTransform() {
    const steps = `translate(${ts.translate.x}px,${ts.translate.y}px) scale(${ts.scale}) rotate(${ts.rotate}deg) translate3d(0,0,0)`;
    //console.log(steps);
    img.style.transform = steps;
  }
  setTransform();
};
