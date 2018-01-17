var outputDiv;
var calcKey;
var eqKeyPressed;

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/'];
var operations = ['add', 'sub', 'mul', 'div'];
var result = [];

/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp) {
    try {
        return eval(mathExp);
    } catch (e) {
        return NaN;
    };
}

document.addEventListener('DOMContentLoaded', function() {
    outputDiv = document.getElementById('output');

    document.addEventListener('click', function(event) {
        calcKey = event.target;
        if (numbers.indexOf(calcKey.id) !== -1) {
            eqKeyPressed ? result = [calcKey.innerText] : result.push(calcKey.innerText);
            eqKeyPressed = false;
        } else if (operations.indexOf(calcKey.id) !== -1) {
            operators.includes(result[result.length - 1].slice(1, -1)) ? result[result.length - 1] = ' ' + calcKey.innerText + ' ' : result.push(' ' + calcKey.innerText + ' ');
            eqKeyPressed = false;
        } else if (calcKey === document.getElementById('eq')) {
            eqKeyPressed = true;
            var lastInput = result[result.length - 1];
            if (!operators.includes(lastInput.slice(1, -1))) {
                outputDiv.innerText = calculate(result.join(''));
                result = [outputDiv.innerText];
            };
        } else if (calcKey === document.getElementById('del')) {
            result = [outputDiv.innerText.slice(0, -1)];
        } else if (calcKey === document.getElementById('clr')) {
            result = [];
        }
        outputDiv.innerText = result.length > 12 ? result.join('').slice(result.length - 12) : result.join('');
    });
});