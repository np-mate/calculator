let displayValue = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";

function updateDisplay() {
    document.getElementById("display").textContent = displayValue || "0";
}

function appendNumber(number) {
    if (operator === "") {
        firstOperand += number;
        displayValue = firstOperand;
    } else {
        secondOperand += number;
        displayValue = secondOperand;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (firstOperand === "") return;
    if (secondOperand !== "") calculate();
    operator = op;
    displayValue = firstOperand + " " + operator;
    updateDisplay();
}

function appendDecimal() {
    if (operator === "") {
        if (!firstOperand.includes(".")) {
            firstOperand += ".";
            displayValue = firstOperand;
        }
    } else {
        if (!secondOperand.includes(".")) {
            secondOperand += ".";
            displayValue = secondOperand;
        }
    }
    updateDisplay();
}

function calculate() {
    if (firstOperand === "" || secondOperand === "" || operator === "") return;
    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": 
            if (num2 === 0) {
                displayValue = "Error";
                updateDisplay();
                return;
            }
            result = num1 / num2; 
            break;
    }

    displayValue = result;
    firstOperand = result.toString();
    secondOperand = "";
    operator = "";
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    operator = "";
    firstOperand = "";
    secondOperand = "";
    updateDisplay();
}

function backspace() {
    if (operator === "") {
        firstOperand = firstOperand.slice(0, -1);
        displayValue = firstOperand;
    } else if (secondOperand === "") {
        operator = "";
        displayValue = firstOperand;
    } else {
        secondOperand = secondOperand.slice(0, -1);
        displayValue = secondOperand;
    }
    updateDisplay();
}

updateDisplay();
