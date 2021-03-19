const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  operandButtons = ["+", "-", "*", "/", "C"],
  equalsButton = "=";
const resultScreen = document.querySelector(".result-screen");

let currentNum = "";
let previousNum = "";
let currentOperation = "";

function handleNumberBtnClick(event) {
  val = event.target.value;
  currentNum = currentNum + val;
  resultScreen.innerHTML = currentNum;
}

function clearResultScreen() {
  currentNum = "";
  previousNum = "";
  resultScreenDisplayNum = "";
  resultScreen.innerHTML = 0;
}

function calculateResult() {
  switch (currentOperation) {
    case "+":
      resultNumber = parseInt(previousNum) + parseInt(currentNum);
      resultScreen.innerHTML = resultNumber;
      previousNum = resultNumber;
      currentNum = "";
      // currentOperation = undefined;
      break;
    case "-":
      resultNumber = parseInt(previousNum) - parseInt(currentNum);
      resultScreen.innerHTML = resultNumber;
      previousNum = resultNumber;
      currentNum = "";
      // currentOperation = undefined;
      break;

    case "*":
      resultNumber = parseInt(previousNum) * parseInt(currentNum);
      resultScreen.innerHTML = resultNumber;
      previousNum = resultNumber;
      currentNum = "";
      // currentOperation = undefined;
      break;
    case "/":
      resultNumber = parseInt(previousNum) / parseInt(currentNum);
      resultScreen.innerHTML = resultNumber;
      previousNum = resultNumber;
      currentNum = "";
      // currentOperation = undefined;
      break;
    default:
      break;
  }
  currentOperation = undefined;
}

function handleOperandBtn(operation) {
  if (currentNum === "") return;
  if (previousNum !== "") {
    currentOperation = operation.target.value;
    calculateResult();
  }
  currentOperation = operation.target.value;
  previousNum = currentNum;
  currentNum = "";
}

function createButtons() {
  numberButtons.forEach(function (b) {
    btn = document.createElement("button");
    btn.innerHTML = b;
    btn.value = b;
    btn.className = "number-button";
    btn.addEventListener("click", handleNumberBtnClick);
    document.querySelector(".main-container").appendChild(btn);
  });
  operandButtons.forEach(function (b) {
    btn = document.createElement("button");
    btn.innerHTML = b;
    btn.className = "operand-button";
    btn.value = b;
    if (btn.value == "C") {
      btn.addEventListener("click", clearResultScreen);
    } else if (btn.value == "+" || "-" || "*" || "/") {
      btn.addEventListener("click", handleOperandBtn);
    } else {
      // btn.addEventListener("click", calculateResult);
    }
    document.querySelector(".main-container").appendChild(btn);
  });
  equals = document.createElement("button");
  equals.innerHTML = "=";
  equals.className = "operand-button";
  equals.value = "=";
  document.querySelector(".main-container").appendChild(equals);
  equals.addEventListener("click", calculateResult);
}

function init() {
  createButtons();
}

init();
