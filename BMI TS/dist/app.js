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
const calculateBMI = (height, weight) => {
    const BMI = weight / (height * height);
    if (BMI < 18.5) {
        return [BMI, "Underweight"];
    }
    if (BMI < 25) {
        return [BMI, "Correct"];
    }
    if (BMI < 30) {
        return [BMI, "Overweight"];
    }
    else {
        return [BMI, "Obese"];
    }
    //   console.log(weight / (height * height));
};
const renderCalculaton = (height, weight) => {
    formCalc.classList.toggle("visible");
    const output = document.createElement("div");
    const [BMI, Condition] = calculateBMI(height, weight);
    output.className = "BMI-calculated"; //Klasa movie-element jest w css
    output.innerHTML = `
      <h2>You'r BMI to: ${BMI.toFixed(1)} and it's ${Condition}</h2>

  `;
    const listRoot = document.getElementById("entry");
    if (listRoot.hasChildNodes()) {
        listRoot.children[0]?.remove();
        // listRoot.firstChild.remove();
    }
    listRoot.append(output);
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
export {};
//# sourceMappingURL=app.js.map