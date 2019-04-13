const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500; //css 사이즈 말고 따로 지정해줘야함

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    //마우스 클릭전까지
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  // console.log(event); //event를 console.log 로 열어서 보면 event 속성들 볼 수 있음
  // console.log(x, y);
}

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}
// function onMouseDown(event) {
//   // console.log(event);
//   painting = true;
// }

// function onMouseUp(event) {
//   // painting = false;
//   stopPainting();
// }

// function onMouseLeave(event) {
// painting = false;
// }

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
