const display = document.querySelector('.display');

const operatorColor = 'yellow';
const numberColor = 'blue';
const functionColor = 'grey';



// Object for buttons, can bind the button to a given element
function ButtonData (label, color, onClick) {
    this.label = label;
    this.color = color;
    this.onClick = onClick;
    this.bindButton = function (element) {
        element.addEventListener('click', this.onClick);
    }
}

// Does calculations using string operators Should probably look up eval?
function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            return x / y;
            break;
        case '^':
            return x ** y;
        default:
            return 'INVALID OPERATOR'
    };
}


// Button Functions

// reusable function for all num buttons
function numberButton(n) {
    return function () {
        if (display.textContent.length < 8){
            display.textContent += n;
        }
    }
}

var zero, one, two, three, four, five, six, seven, eight, nine;

const numberButtons = [zero, one, two, three, four, five, six, seven, eight, nine];

// Created all the number button objects
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i] = new ButtonData(i, 'blue', numberButton(i));
}


// Button Definitions
const clear = new ButtonData('AC', functionColor, function(){
    display.textContent = "";
    num1 = 0;
    operator = undefined;
})

const negative = new ButtonData('+/-', functionColor, function(){
    if (display.textContent[0] == '-') {
        display.textContent = display.textContent.slice(1);
    } else {
        display.textContent = '-' + display.textContent;
    }
})

const backspace = new ButtonData('←', functionColor, function(){
    display.textContent = display.textContent.slice(0, -1);
})

const decimal = new ButtonData('.', numberColor, function(){
    display.textContent += '.';
})

let num1 = 0;
let operator = undefined

const equals = new ButtonData('=', operatorColor, function(){
    let result = operate(operator, num1, Number(display.textContent));
    num1 = result;
    display.textContent = result;
    
})


function operatorButton(chosenOperator){
    num1 = Number(display.textContent)
    display.textContent = '';
    operator = chosenOperator;
};

const plus = new ButtonData('+', operatorColor, function(){
    operatorButton('+');
})

const minus = new ButtonData('-', operatorColor, function(){
    operatorButton('-');
})

const times = new ButtonData('x', operatorColor, function(){
    operatorButton('*');
})

const dividedBy = new ButtonData('÷', operatorColor, function(){
    operatorButton('/');
})

const power = new ButtonData('^', operatorColor, function(){
    operatorButton('*');
})


// Map of objects to buttons
const buttonMap = [
    [clear, negative, backspace, power],
    [numberButtons[7],numberButtons[8], numberButtons[9], dividedBy],
    [numberButtons[4], numberButtons[5], numberButtons[6], times],
    [numberButtons[1], numberButtons[2], numberButtons[3], minus],
    [numberButtons[0], decimal, equals, plus],
]



// draws all the buttons
function drawKeypad () {
    const buttons = document.querySelector(".buttons")
    for (let i = 0; i < buttonMap.length; i++) {
        // Creates a container for a row of buttons
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < buttonMap[i].length; j++) {
            // creates a button coloring and labeling
            const button = document.createElement('button');
            button.textContent = buttonMap[i][j].label;
            button.setAttribute('style', `background-color: ${buttonMap[i][j].color}`);  
            buttonMap[i][j].bindButton(button);

            row.appendChild(button)
        }
        buttons.appendChild(row);
    }
}

drawKeypad()



