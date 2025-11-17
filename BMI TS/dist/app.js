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
    new Render("tpl-bmi-result", "entry", BMI, Condition);
    // new Render("grid-canvas");
    const canvas = document.getElementById("canvas");
    drawBoard(canvas.width, canvas.height, canvas, height, weight);
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