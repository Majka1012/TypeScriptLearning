import { BMIClass } from "./calculateBMI.js";
import { drawBoard } from "./app-grid.js";
import { Render } from "./render.js";
export class RenderCalculaton {
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
        new Render("tpl-bmi-result", "entry", this.BMI, this.Condition);
        const canvas = document.getElementById("canvas");
        drawBoard(canvas.width, canvas.height, canvas, this.height, this.weight);
        this.RenderSwitch();
    }
    RenderSwitch() {
        switch (this.Condition) {
            case "Underweight":
                new Render("tpl-info-underweight", "InfoEntry");
                break;
            case "Overweight":
                new Render("tpl-info-overweight", "InfoEntry");
                break;
            case "Obese":
                new Render("tpl-info-obese", "InfoEntry");
                break;
            default:
                new Render("nothing", "InfoEntry");
        }
    }
}
//# sourceMappingURL=renderCalculation.js.map