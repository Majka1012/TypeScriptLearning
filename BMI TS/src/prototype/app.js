//ORYGINAL JS FILE BEFORE TYPESCRIPT
import { drawBoard } from "./app-grid.js";
import { calculateBMI } from "./calculateBMI.js";

const formCalc = document.querySelector("form");
const userInputs = formCalc.querySelectorAll("input");

formCalc.addEventListener("submit", (event) => {
  event.preventDefault();
  addMovieHandler();
  // console.log("click");
  formCalc.reset();
});

const renderCalculaton = (height, weight, gender) => {
  formCalc.classList.toggle("visible");
  const [BMI, Condition] = calculateBMI(height, weight);
  const output = document.createElement("div");
  output.className = "BMI-calculated"; //Klasa movie-element jest w css
  output.innerHTML = `
      <h2>Your BMI: ${BMI.toFixed(1)} and it's ${Condition}</h2>
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
  drawBoard(canvas.width, canvas.height, ctx, height, weight);
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
