const buttonLabels = [
    ['AC', '+/-', '←', '^'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
]

const buttonColors = [
    ['grey', 'grey', 'grey', 'yellow'],
    ['blue', 'blue', 'blue', 'yellow'],
    ['blue', 'blue', 'blue', 'yellow'],
    ['blue', 'blue', 'blue', 'yellow'],
    ['blue', 'blue', 'yellow', 'yellow'],
]

function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return add(x, y);
            break;
        case '-':
            return subtract(x, y);
            break;
        case '*':
            return multiply(x, y);
            break;
        case '/':
            return divide(x, y);
            break;
        default:
            return 'INVALID OPERATOR'
    };
}

function drawKeypad () {
    const buttons = document.querySelector(".buttons")
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 4; j++) {
            const button = document.createElement('button');
            button.textContent = buttonLabels[i][j];
            button.setAttribute('style', `background-color: ${buttonColors[i][j]}`);    
            row.appendChild(button)
        }
        buttons.appendChild(row);
    }
}

drawKeypad()
console.log(buttonLabels)