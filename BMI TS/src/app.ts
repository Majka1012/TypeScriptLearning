import { calculateBMI } from "./calculateBMI.js";
import { drawBoard } from "./app-grid.js";

const formCalc = document.querySelector("form")!;
// if(formCalc===null){throw.console.error("SOMETHING WRONG");
// }
const userInputs = formCalc?.querySelectorAll("input")!;
// if(userInputs===null){throw.console.error("SOMETHING WRONG");
// }

formCalc.addEventListener("submit", (event) => {
  event.preventDefault();
  addMovieHandler();
  formCalc.reset();
});

const addMovieHandler = () => {
  if (!userInputs[0] || !userInputs[1]) {
    alert("Please enter valid values.");
    return;
  }
  const Height = +userInputs[0].value;
  const Weight = +userInputs[1].value;

  console.log();
  if (
    !Height ||
    !Weight ||
    isNaN(Height) ||
    isNaN(Weight) ||
    +Height < 1 ||
    +Height > 2.5 ||
    +Weight < 40 ||
    +Weight > 200
  ) {
    alert("Please enter valid values.");
    return;
  }

  renderCalculaton(Height, Weight);
};

const renderCalculaton = (height: number, weight: number) => {
  // formCalc.classList.toggle("visible");
  const [BMI, Condition] = calculateBMI(height, weight);
  // const output = document.createElement("div");
  // output.className = "BMI-calculated";
  // output.innerHTML = `
  //     <h2>Your BMI: ${BMI.toFixed(1)} and it's ${Condition}</h2>
  // `;
  // const output2 = document.createElement("div");
  // output2.className = "BMI-calculated";
  // output2.id = "grid-canvas";
  // output2.innerHTML = `
  //     <canvas id="canvas" width="400px" height="200px"></canvas>
  //     <p>*Visualisation is imperfect, please go by your BMI</p>`;
  // const listRoot = document.getElementById("entry")!;
  // if (listRoot.hasChildNodes()) {
  //   listRoot.innerHTML = "";
  // }
  // listRoot.append(output);
  // listRoot.append(output2);
  const html1 = `<h2>Your BMI: ${BMI.toFixed(1)} and it's ${Condition}</h2>`;
  const html2 = `<canvas id="canvas" width="400px" height="200px"></canvas>
  <p>*Visualisation is imperfect, please go by your BMI</p>`;
  render("div", "BMI-calculated", html1, "BMILabel");
  render("div", "BMI-calculated", html2, "grid-canvas");

  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  drawBoard(canvas.width, canvas.height, canvas, height, weight);
};

const render = (ElCreate: string, className: string, innerHTML: string, id: string) => {
  const output = document.createElement(ElCreate);
  output.className = className;
  output.innerHTML = innerHTML;
  if (id) {
    output.id = id;
  }
  const listRoot = document.getElementById("entry")!;
  if (listRoot.hasChildNodes()) {
    listRoot.innerHTML = "";
  }
  listRoot.append(output);
};
