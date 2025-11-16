export class BMIClass {
  BMI_Value: number;
  Condition: string;
  constructor(public height: number, public weight: number) {
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
    } else if (this.BMI_Value < 25) {
      this.Condition = "Correct";
    } else if (this.BMI_Value < 30) {
      this.Condition = "Overweight";
    } else {
      this.Condition = "Obese";
    }
  }
}
