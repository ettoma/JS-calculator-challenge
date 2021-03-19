const numberButtons = document.querySelectorAll(".number-button"),
  operandButtons = document.querySelectorAll(".operand-button"),
  equalsButton = document.querySelector(".equals-button"),
  resultScreen = document.querySelector(".result-screen");

let currentNum = "";
let previousNum = "";
let currentOperation = "";
let resultNumber = "";

function handleNumberBtnClick(event) {
  val = event.target.value;
  currentNum = parseFloat(currentNum + val);
  resultScreen.innerHTML = currentNum;
}

function clearResultScreen() {
  currentNum = "";
  previousNum = "";
  resultScreenDisplayNum = "";
  resultScreen.innerHTML = 0;
  resultNumber = "";
}

function calculateResult() {
  // if (currentOperation == '' || previousNum == '' || currentNum == '') return;
  switch (currentOperation) {
    case "+":
      resultNumber = parseFloat(previousNum) + parseFloat(currentNum);
      resultScreen.innerHTML = parseFloat(resultNumber);
      currentNum = "";
      break;
    case "-":
      resultNumber = parseFloat(previousNum) - parseFloat(currentNum);
      resultScreen.innerHTML = parseFloat(resultNumber);
      currentNum = "";
      break;
      
    case "*":
      resultNumber = parseFloat(previousNum) * parseFloat(currentNum);
      resultScreen.innerHTML = parseFloat(resultNumber);
      currentNum = "";
      break;
      case "/":
      resultNumber = parseFloat(previousNum) / parseFloat(currentNum);
      resultScreen.innerHTML = parseFloat(resultNumber);
      currentNum = "";
      break;
    default:
      break;
    }
}

function handleOperandBtn(operation) {
  if (currentOperation != '' &&  previousNum != '' && currentNum != '') {
    calculateResult();
  }
  currentOperation = operation.target.value;
  if (resultNumber !== "") {
    previousNum = parseFloat(resultNumber);
  } else {
    previousNum = parseFloat(currentNum);
    currentNum = "";
  }
}

function handleButtonClicked() {
  numberButtons.forEach(function (b) {
    b.addEventListener("click", handleNumberBtnClick);
  });
  operandButtons.forEach(function (b) {
    if (b.value == "C") {
      b.addEventListener("click", clearResultScreen);
    } else {
      b.addEventListener("click", handleOperandBtn);
    }
  });
  equalsButton.addEventListener("click", calculateResult);
}

function init() {
  handleButtonClicked();
}

init();
