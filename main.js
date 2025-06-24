let firstNumber = "";
let operation = "";
let secondNumber = "";

const operatorArray = document.querySelectorAll(".operator");
const numberArray = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

operatorArray.forEach((button) => {
  button.addEventListener("click", (event) => {
    const op = event.target.innerText;
    operationPressed(op);
  });
});
numberArray.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.innerText;

    if (value === ".") {
      if (!operation && firstNumber.includes(".")) return;
      if (operation && secondNumber.includes(".")) return;
    }
    if (!operation) {
      firstNumber += value;
    } else {
      secondNumber += value;
    }
    updateScreen();
  });
});
//when equal is pressed
equal.addEventListener("click", (event) => {
  calcResult();
});

clear.addEventListener("click", clearScreen);

// Calculate the result of the current expression, if valid, and display it on the screen
function calcResult() {
  if (firstNumber === "" || operation === "" || secondNumber === "") return;
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  let result = 0;
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (b !== 0) {
      result = num1 / num2;
    }else{
        result = 'Error';
    }
  }else{
    return;
  }


  firstNumber = result.toString();
  secondNumber = '';
  operation = ''
  document.querySelector("#screen").innerText = firstNumber
}

function numberPressed(number) {
  if(operation === ''){
    firstNumber += number;
  }else{
    secondNumber += number
  }
  updateScreen()
}
// Handle operations when operation buttons (+, -, /, *) are pressed
function operationPressed(op) {
  if (firstNumber === "") return;
  if (secondNumber !== "") return;
  operation = op;
  updateScreen();
}


// Clear the calculator screen
function clearScreen() {
  firstNumber = "";
  operation = "";
  secondNumber = "";
  updateScreen();
}

// Update the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  document.querySelector(
    "#screen"
  ).innerText = `${firstNumber}${operation}${secondNumber}`;
  // TODO
}


