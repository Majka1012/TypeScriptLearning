export const calculateBMI = (height:number, weight:number):[number,string] => {
  const BMI = weight / (height * height);
  if (BMI < 18.5) {
    return [BMI, "Underweight"];
  }
  if (BMI < 25) {
    return [BMI, "Correct"];
  }
  if (BMI < 30) {
    return [BMI, "Overweight"];
  } else {
    return [BMI, "Obese"];
  }
  //   console.log(weight / (height * height));
};
