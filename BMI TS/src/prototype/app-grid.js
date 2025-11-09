import { calculateBMI } from "./calculateBMI.js";
export function drawBoard(bw, bh, ctx, height, weight) {
  const cols = 20;
  const rows = 10;
  const marginBottom = 20;
  const marginLeft = 25;
  const cellWidth = (bw - marginLeft) / cols;
  const cellHeight = (bh - marginBottom) / rows;
  ctx.clearRect(0, 0, bw, bh);
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

  ctx.fillStyle = "#1d3557";
  ctx.font = "10px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  //X AXIS
  for (let i = 1; i <= cols; i++) {
    const x = marginLeft + (i - 0.5) * cellWidth;
    ctx.fillText(i * 5 + 35, x, bh - marginBottom + 3);
  }
  //Y AXIS
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let i = 1; i <= rows; i++) {
    const y = bh - marginBottom - (i - 0.5) * cellHeight;
    ctx.fillText(i * 5 + 145, marginLeft - 5, y);
  }
  for (let i = 1; i <= cols; i++) {
    for (let j = 1; j <= rows; j++) {
      let prevWeight = i * 5 + 35;
      let nextWeight = (i + 1) * 5 + 35;
      let prevHeight = j * 5 + 145;
      let nextHeight = (j + 1) * 5 + 145;
      if (
        prevWeight < weight &&
        nextWeight >= weight &&
        prevHeight < height * 100 &&
        nextHeight >= height * 100
      ) {
        colorGrid(ctx, "red", i, j, marginLeft, marginBottom, cellWidth, cellHeight, bh);
        continue;
      }

      //   else {console.log("IT SUCKS");}
    }
  }

  //   console.log(`weight: ${weight} and  height: ${height * 100}`);
}

function colorGrid(ctx, color, i, j, marginLeft, marginBottom, cellWidth, cellHeight, bh) {
  ctx.fillStyle = `${color}`;
  ctx.fillRect(
    marginLeft + i * cellWidth,
    bh - marginBottom - (j + 1) * cellHeight,
    cellWidth,
    cellHeight
  );
}
