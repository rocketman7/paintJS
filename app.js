const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const DEFAULT_COLOR = "#2c2c2c";
canvas.width = 500;
canvas.height = 500; //css 사이즈 말고 따로 지정해줘야함 pixel modifier

ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;
ctx.fillStyle = ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath(); //마우스가 움직일때마다 call beginPath
    ctx.moveTo(x, y); //Moves the starting point of a new sub-path to the (x, y) coordinates.
    //마우스 클릭전까지
  } else {
    ctx.lineTo(x, y); //Connects the last point in the current sub-path to the specified (x, y) coordinates with a straight line.
    ctx.stroke(); //Strokes the current sub-paths with the current stroke style.
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

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  // console.log(color);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  // console.log(event.target.value);
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(event) {
  if (filling) {
    filling = false;
    mode.innerText = "Canvas Color";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
  console.log(filling);
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, 700, 700);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
}

// console.log(Array.from(colors)); //array로 만들어줌
Array.from(colors).forEach(colors =>
  colors.addEventListener("click", handleColorClick)
);

// console.log(range.value);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
