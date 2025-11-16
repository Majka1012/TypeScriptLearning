// export const calculateBMI = (height:number, weight:number):[number,string] => {
//   const BMI = weight / (height * height);
//   if (BMI < 18.5) {
//     return [BMI, "Underweight"];
//   }
//   if (BMI < 25) {
//     return [BMI, "Correct"];
//   }
//   if (BMI < 30) {
//     return [BMI, "Overweight"];
//   } else {
//     return [BMI, "Obese"];
//   }
//   //   console.log(weight / (height * height));
// };
export class BMIClass {
    height;
    weight;
    BMI_Value;
    Condition;
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
        if (!height || !weight) {
            throw new Error("WRONG HEIGHT OR WEIGHT");
        }
        this.BMI_Value = this.weight / (this.height * this.height);
        this.Condition = "";
        this.ConditionSetter();
    }
    ConditionSetter() {
        if (this.BMI_Value < 18.5) {
            this.Condition = "Underweight";
        }
        else if (this.BMI_Value < 25) {
            this.Condition = "Correct";
        }
        else if (this.BMI_Value < 30) {
            this.Condition = "Overweight";
        }
        else {
            this.Condition = "Obese";
        }
    }
}
//# sourceMappingURL=calculateBMI.js.map