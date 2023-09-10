//Task1
/*const getString = prompt('Enter string please:');
let newString = '';

function doubleLetter(str) {
    for (let i = 0; i < str.length; i++) {
        newString += str[i].repeat(2);
    }
    return newString;
}

const result = doubleLetter(getString);
console.log(result);
*/

//Task 2
/*
const getString = prompt('Enter string please:');
const userInput = prompt('Введіть число');
const number = parseInt(userInput);
const getSymbol = prompt('Enter symbol please:');
const getTo = false;


function padString(str, length, symbol, toLeft) {
    if (str.length >= length) {
        return str; 
    }

    const padding = symbol.repeat(length - str.length);

    if (toLeft) {
        return padding + str; 
    } else {
        return str + padding; 
    }
}

const result = padString(getString, number, getSymbol, getTo);
console.log(result);
*/



