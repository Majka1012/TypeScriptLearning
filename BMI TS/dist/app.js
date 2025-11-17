import { BMIClass } from "./calculateBMI.js";
import { drawBoard } from "./app-grid.js";
import { Render } from "./render.js";
class App {
    Height;
    Weight;
    formCalc;
    userInputs;
    constructor() {
        this.Height = 0;
        this.Weight = 0;
        this.formCalc = document.querySelector("form");
        this.userInputs = this.formCalc.querySelectorAll("input");
        this.formCalc.addEventListener("submit", (event) => {
            event.preventDefault();
            this.BMIHandlerMet();
            this.formCalc.reset();
        });
    }
    BMIHandlerMet() {
        if (!this.userInputs[0] || !this.userInputs[1]) {
            alert("Please enter valid values. FROM CLASSS");
            return;
        }
        if (!this.userInputs[0].value || !this.userInputs[1].value) {
            throw new Error("NODEVALUE DOESN'T WORK");
        }
        this.Height = +this.userInputs[0].value;
        this.Weight = +this.userInputs[1].value;
        console.log(this.Height);
        if (!this.Height ||
            !this.Weight ||
            isNaN(this.Height) ||
            isNaN(this.Weight) ||
            +this.Height < 1 ||
            +this.Height > 2.5 ||
            +this.Weight < 40 ||
            +this.Weight > 200) {
            alert("Please enter valid values.FROM CLASSS 2");
            return;
        }
        // new RenderCalculaton(this.Height,this.Weight);
        renderCalculaton(this.Height, this.Weight);
    }
}
const renderCalculaton = (height, weight) => {
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
    const htmlUnderweight = `Being underweight means your body mass is below the range normally required for good health. Your body may lack the nutrition it needs to maintain its tissues and functions. If your BMI is below 18.5, you should see a healthcare provider for testing. Having underweight can cause serious health risks or be a sign of a serious underlying condition.`;
    const htmlOverweight = `Being overweight is having more body fat than is considered healthy. Being overweight is especially common where food supplies are plentiful and lifestyles are sedentary. `;
    const htmlObese = `Obesity is a medical condition, considered by multiple organizations to be a disease, in which excess body fat has accumulated to such an extent that it can have negative effects on health. Obesity is a leading preventable cause of death worldwide. <br><b>Please go to your doctor!<b><br>`;
    // console.log(Condition);
    new Render("tpl-bmi-result", "entry", BMI, Condition);
    // new Render("grid-canvas");
    const canvas = document.getElementById("canvas");
    // drawBoard(canvas.width, canvas.height, canvas, height, weight);
    if (Condition === "Underweight") {
        new Render("tpl-info-underweight", "InfoEntry");
    }
    else if (Condition === "Overweight") {
        new Render("tpl-info-overweight", "InfoEntry");
    }
    else if (Condition === "Obese") {
        new Render("tpl-info-obese", "InfoEntry");
    }
    else {
        new Render("nothing", "InfoEntry");
    }
};
class RenderCalculaton {
    height;
    weight;
    BMI;
    Condition;
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
        const BMICalc = new BMIClass(this.height, this.weight);
        this.BMI = BMICalc.BMI_Value;
        this.Condition = BMICalc.Condition;
    }
}
new App();
//# sourceMappingURL=app.js.map