import { BMIClass } from "./calculateBMI.js";
import { drawBoard } from "./app-grid.js";
import { Render } from "./render.js";

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
  const bmi1 = new BMIClass(height, weight);
  const BMI = bmi1.BMI_Value;
  const Condition = bmi1.Condition;
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

  new Render("div", "BMI-calculated", html1, "BMILabel", "entry");
  new Render("div", "BMI-calculated", html2, "grid-canvas", "entry");

  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  drawBoard(canvas.width, canvas.height, canvas, height, weight);

  const htmlUnderweight = `Being underweight means your body mass is below the range normally required for good health. Your body may lack the nutrition it needs to maintain its tissues and functions. If your BMI is below 18.5, you should see a healthcare provider for testing. Having underweight can cause serious health risks or be a sign of a serious underlying condition.`;
  const htmlOverweight = `Being overweight is having more body fat than is considered healthy. Being overweight is especially common where food supplies are plentiful and lifestyles are sedentary. `;
  const htmlObese = `Obesity is a medical condition, considered by multiple organizations to be a disease, in which excess body fat has accumulated to such an extent that it can have negative effects on health. Obesity is a leading preventable cause of death worldwide. <br><b>Please go to your doctor!<b><br>`;
  if (Condition === "Underweight") {
    new Render("p", "BMI-Info", htmlUnderweight, "InfoUnderW", "InfoEntry", "white");
  } else if (Condition === "Overweight") {
    new Render("p", "BMI-Info", htmlOverweight, "InfoOverW", "InfoEntry", "orange");
  } else if (Condition === "Obese") {
    new Render("p", "BMI-Info", htmlObese, "InfoObese", "InfoEntry", "red");
  } else {
    new Render("p", "", "", "", "InfoEntry");
  }
};
