const canvas = document.getElementById("whiteboard");
const deleteButton = document.getElementById("deleteButton");
const undoButton = document.getElementById("undoButton");
const ctx = canvas.getContext("2d");
let drawing = false;
let objects = [];
let tempPath = null;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);



function startDrawing(e) {
  drawing = true;
  tempPath = [{ x: e.clientX - canvas.offsetLeft, y: e.clientY - canvas.offsetTop }];
}

function draw(e) {
  if (!drawing) return;
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.strokeStyle = "black";

  tempPath.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - canvas.offsetTop });

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  redrawCanvas();
}

function stopDrawing() {
  if (!drawing) return;
  drawing = false;
  if (tempPath.length > 1) {
    addObjectToCanvas(tempPath);
  }
  tempPath = null;
}

function clearWhiteboard() {
  objects = [];
  redrawCanvas();
}
deleteButton.addEventListener("click", clearWhiteboard);
undoButton.addEventListener("click", handleUndo);

function handleUndo() {
  objects.pop(); 
  redrawCanvas();
}

function redrawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const obj of objects) {
    ctx.beginPath();
    ctx.moveTo(obj.path[0].x, obj.path[0].y);
    for (const point of obj.path) {
      ctx.lineTo(point.x, point.y);
    }
    ctx.stroke();
  }
}

function addObjectToCanvas(path) {
  objects.push({ path });
  redrawCanvas();
}