function add(a, b) {
    display.innerHTML = +a + (+b);
    firstNumber = display.innerHTML;
    secondNumber = undefined;
    operator = undefined;
    beginSecond = undefined;
};

function subtract(a, b) {
    display.innerHTML = +a - (+b);
    firstNumber = display.innerHTML;
    secondNumber = undefined;
    operator = undefined;
    beginSecond = undefined;
};

function multiply(a, b) {
    display.innerHTML = +a * (+b);
    firstNumber = display.innerHTML;
    secondNumber = undefined;
    operator = undefined;
    beginSecond = undefined;
};

function divide(a, b) {
    display.innerHTML = +a / (+b);
    firstNumber = display.innerHTML;
    secondNumber = undefined;
    operator = undefined;
    beginSecond = undefined;
}



let firstNumber;
let secondNumber;
let operator;

let display = document.querySelector('div#display');
const numbers = document.querySelectorAll('div.number');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');
let operators = document.querySelectorAll('div.operator');
let beginSecond;

let finalOperators = document.querySelectorAll('div.equal');

function displayFirstNumber(number) {
    if (display.innerHTML.length < 10) {

        display.innerHTML += number;

    }
}
function displaySecondNumber(number) {
    if (display.innerHTML.length < 10) {

        display.innerHTML += number;

    }
}

function clearDisplay() {
    display.innerHTML = 0;
    clearHighlight();
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    beginSecond = undefined;
}

clear.addEventListener('click', clearDisplay);


for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        clearHighlight();
        if (display.innerHTML == 0 || (operator && !beginSecond)) {
            display.innerHTML = this.id;
        } else {

            if (!(this.id == '.' && display.innerHTML.includes('.'))) {
                addNumber(this.id);
            }

        }
        modifyNumbers();
    })
}

function modifyNumbers() {
    if (operator) {
        secondNumber = display.innerHTML;
        beginSecond = true;
    } else {
        firstNumber = display.innerHTML;
    }
}


function addNumber(number) {

    displayFirstNumber(number);

}

for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        if (display.innerHTML != undefined & !operator) {
            if (this.id === 'multiply') {
                operator = 'multiply';
            } else if (this.id === 'subtract') {
                operator = 'subtract';
            } else if (this.id === 'add') {
                operator = 'add'
            } else if (this.id === 'divide') {
                operator = 'divide';
            }
            clearHighlight();
            this.classList.add('highlighted');

        }
    })
}

function clearHighlight() {
    for (i = 0; i < finalOperators.length; i++) {
        finalOperators[i].classList.remove('highlighted');
    }
}

for (i = 0; i < finalOperators.length; i++) {
    finalOperators[i].addEventListener('click', function () {


        if (firstNumber && secondNumber && operator) {

            if (operator === 'add') {
                operator = undefined;
                add(firstNumber, secondNumber);
            } else if (operator === 'subtract') {
                operator = undefined;
                subtract(firstNumber, secondNumber);
            } else if (operator === 'multiply') {
                operator = undefined;
                multiply(firstNumber, secondNumber);
            } else if (operator === 'divide') {
                if (secondNumber == 0) {
                    display.innerHTML = 'Not possible'
                } else {
                    operator = undefined;
                    divide(firstNumber, secondNumber);
                }
            }
            clearHighlight();
            checkDigits();
        }

    })
}


for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        if (display.innerHTML != undefined & !operator) {
            if (this.id === 'multiply') {
                operator = 'multiply';
            } else if (this.id === 'subtract') {
                operator = 'subtract';
            } else if (this.id === 'add') {
                operator = 'add'
            } else if (this.id === 'divide') {
                operator = 'divide';
            }
            clearHighlight();
            this.classList.add('highlighted');

        }
    })
}

function checkDigits() {
    if (display.innerHTML.length >= 10 && display.innerHTML != 'Not possible') {
        let num = +display.innerHTML;
        num = num.toPrecision(9);
        display.innerHTML = num;
    }
}