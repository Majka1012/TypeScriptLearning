import { RenderCalculaton } from "./renderCalculation.js";
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
        new RenderCalculaton(this.Height, this.Weight);
        // renderCalculaton(this.Height, this.Weight);
    }
}
new App();
//# sourceMappingURL=app.js.map