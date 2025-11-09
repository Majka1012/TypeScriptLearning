//ORYGINAL JS FILE BEFORE TYPESCRIPT
const formCalc = document.querySelector("form");
const userInputs = formCalc.querySelectorAll("input");

formCalc.addEventListener("submit", (event) => {
  event.preventDefault();
  addMovieHandler();
  // console.log("click");
  formCalc.reset();
});
const calculateBMI = (height, weight) => {
  const BMI = weight / (height * height);
  if (BMI < 18.5) {
    return [BMI, "Underweight"];
  }
  if (BMI < 25) {
    return [BMI, "Correct"];
  }
  if (BMI < 30) {
    return [BMI, "Overweight"];
  } else {
    return [BMI, "Obese"];
  }
  //   console.log(weight / (height * height));
};

const renderCalculaton = (height, weight, gender) => {
  formCalc.classList.toggle("visible");
  const [BMI, Condition] = calculateBMI(height, weight);
  const output = document.createElement("div");
  output.className = "BMI-calculated"; //Klasa movie-element jest w css
  output.innerHTML = `
      <h2>You'r BMI to: ${BMI.toFixed(1)} and it's ${Condition}</h2>
  `;
  const output2 = document.createElement("div");
  output2.className = "BMI-calculated"; //Klasa movie-element jest w css
  output2.innerHTML = `
      <canvas id="canvas" width="400px" height="200px"></canvas>`;
  const listRoot = document.getElementById("entry");
  if (listRoot.hasChildNodes()) {
    listRoot.innerHTML = "";
    // listRoot.firstChild.remove();
  }
  listRoot.append(output);
  listRoot.append(output2);

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // ctx.fillRect(1, 1, 10, 20);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawBoard(canvas.width, canvas.height, ctx);
};
const drawBoard = (bw, bh, ctx) => {
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

  ctx.strokeStyle = "grey";
  ctx.stroke();

  ctx.fillStyle = "black";
  ctx.font = "10px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  for (let i = 1; i <= cols; i++) {
    const x = marginLeft + (i - 0.5) * cellWidth;
    ctx.fillText(i * 5 + 35, x, bh - marginBottom + 3);
  }
  // Etykiety osi Y
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let i = 1; i <= rows; i++) {
    const y = bh - marginBottom - (i - 0.5) * cellHeight;
    ctx.fillText(i * 5 + 145, marginLeft - 5, y);
  }
};
const addMovieHandler = () => {
  const Height = userInputs[0].value;
  const Weight = userInputs[1].value;
  const Gender = userInputs[2].value;
  console.log();
  if (
    Height.trim() === "" ||
    Weight.trim() === "" ||
    isNaN(Height) ||
    isNaN(Weight) ||
    +Height < 1 ||
    +Height > 2.5 ||
    +Weight < 40 ||
    +Weight > 200
  ) {
    alert("Please enter valid values.");
    return;
    //trim delets white spaces
  }

  renderCalculaton(Height, Weight, Gender);
};
