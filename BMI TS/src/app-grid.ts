import { calculateBMI } from "./calculateBMI.js";
export function drawBoard(bw:number, bh:number, canvas:HTMLCanvasElement, height:number, weight:number) {
    const ctx = canvas.getContext("2d")!;
  
    // ctx.fillRect(1, 1, 10, 20);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const cols = 20;
  const rows = 10;
  const marginBottom = 20;
  const marginLeft = 25;
  const cellWidth = (bw - marginLeft) / cols;
  const cellHeight = (bh - marginBottom) / rows;
  ctx.clearRect(0, 0, bw, bh);

  ctx.fillStyle = "#1d2c40ff";
  ctx.font = "10px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  //X AXIS
  for (let i = 1; i <= cols; i++) {
    const x = marginLeft + (i - 1) * cellWidth;
    ctx.fillText(String(i * 5 + 35), x, bh - marginBottom + 3);
  }
  //Y AXIS
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let i = 1; i <= rows; i++) {
    const y = bh - marginBottom - (i - 1) * cellHeight;
    ctx.fillText(String(i * 5 + 145), marginLeft - 5, y);
  }
  for (let i = 1; i <= cols; i++) {
    for (let j = 1; j <= rows; j++) {
      let prevWeight = i * 5 + 35;
      let nextWeight = (i + 1) * 5 + 35;
      let prevHeight = j * 5 + 145;
      let nextHeight = (j + 1) * 5 + 145;
      let BMI = calculateBMI(prevHeight / 100, prevWeight)[1];
      if (BMI === "Underweight") {
        colorGrid(canvas, "#f3ecfaff", i, j, marginLeft, marginBottom, cellWidth, cellHeight, bh);
      } else if (BMI === "Correct") {
        colorGrid(canvas, "#4be173ff", i, j, marginLeft, marginBottom, cellWidth, cellHeight, bh);
      } else if (BMI === "Overweight") {
        colorGrid(canvas, "#e1a54bff", i, j, marginLeft, marginBottom, cellWidth, cellHeight, bh);
      } else if (BMI === "Obese") {
        colorGrid(canvas, "#e14b4bff", i, j, marginLeft, marginBottom, cellWidth, cellHeight, bh);
      }

      if (prevWeight <= weight && nextWeight > weight && prevHeight <= height * 100 && nextHeight > height * 100) {
        const scale = 0.7;
        colorGrid(
          canvas,
          "#1d3557",
          i,
          j,
          marginLeft + ((1 - scale) / 2) * cellWidth,
          marginBottom - ((1 - scale) / 2) * cellHeight,
          cellWidth,
          cellHeight,
          bh,
          scale
        );
      }
    }
  }

  ctx.beginPath();
  for (let i = 0; i <= cols; i++) {
    const x = marginLeft + i * cellWidth;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, bh - marginBottom);
  }

  for (let i = 0; i <= rows; i++) {
    const y = bh - marginBottom - i * cellHeight;
    ctx.moveTo(marginLeft, y);
    ctx.lineTo(bw, y);
  }

  ctx.strokeStyle = "#6f8098ff";
  ctx.stroke();

  //   console.log(`weight: ${weight} and  height: ${height * 100}`);
}

function colorGrid(canvas:HTMLCanvasElement, color:string, i:number, j:number, marginLeft:number, marginBottom:number, cellWidth:number, cellHeight:number, bh:number, scale = 1) {
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = `${color}`;
  ctx.fillRect(
    marginLeft + (i - 1) * cellWidth,
    bh - marginBottom - j * cellHeight,
    cellWidth * scale,
    cellHeight * scale
  );
}
