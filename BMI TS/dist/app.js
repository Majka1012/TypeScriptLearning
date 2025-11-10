import { calculateBMI } from "./calculateBMI.js";
import { drawBoard } from "./app-grid.js";
const formCalc = document.querySelector("form");
// if(formCalc===null){throw.console.error("SOMETHING WRONG");
// }
const userInputs = formCalc?.querySelectorAll("input");
// if(userInputs===null){throw.console.error("SOMETHING WRONG");
// }
formCalc.addEventListener("submit", (event) => {
    event.preventDefault();
    addMovieHandler();
    // console.log("click");
    formCalc.reset();
});
const renderCalculaton = (height, weight) => {
    formCalc.classList.toggle("visible");
    const [BMI, Condition] = calculateBMI(height, weight);
    const output = document.createElement("div");
    output.className = "BMI-calculated"; //Klasa movie-element jest w css
    output.innerHTML = `
      <h2>Your BMI: ${BMI.toFixed(1)} and it's ${Condition}</h2>
  `;
    const output2 = document.createElement("div");
    output2.className = "BMI-calculated"; //Klasa movie-element jest w css
    output2.id = "grid-canvas";
    output2.innerHTML = `
      <canvas id="canvas" width="400px" height="200px"></canvas>
      <p>*Visualisation is imperfect, please go by your BMI</p>`;
    const listRoot = document.getElementById("entry");
    if (listRoot.hasChildNodes()) {
        listRoot.innerHTML = "";
        // listRoot.firstChild.remove();
    }
    listRoot.append(output);
    listRoot.append(output2);
    const canvas = document.getElementById("canvas");
    ;
    drawBoard(canvas.width, canvas.height, canvas, height, weight);
};
const addMovieHandler = () => {
    if (!userInputs[0] || !userInputs[1]) {
        alert("Please enter valid values.");
        return;
    }
    const Height = +userInputs[0].value;
    const Weight = +userInputs[1].value;
    console.log();
    if (
    // Height.trim() === "" ||
    // Weight.trim() === "" ||
    !Height ||
        !Weight ||
        isNaN(Height) ||
        isNaN(Weight) ||
        +Height < 1 ||
        +Height > 2.5 ||
        +Weight < 40 ||
        +Weight > 200) {
        alert("Please enter valid values.");
        return;
        //trim delets white spaces
    }
    renderCalculaton(Height, Weight);
};
//# sourceMappingURL=app.js.map