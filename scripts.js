function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
}

function operate(firstNumber, operator, secondNumber) {
    if (operator = 'multiply') {
        multiply(firstNumber, secondNumber);
    } else if (operator = 'subtract') {
        subtract(firstNumber, secondNumber);
    } else if (operator = 'add') {
        add(firstNumber, secondNumber);
    } else if (operator = 'divide') {
        divide(firstNumber, secondNumber);
    }
};
