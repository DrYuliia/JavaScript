//Task 1
/*
const userInput = prompt('Enter Number');
const number = parseInt(userInput);
let counter = 0;

for (let n = 1; n <= number; n++) {
    if (number % n === 0)
    { 
        counter++;
       
    } 
    
} if (counter >= 3)
        {
            console.log(number+" Складене число");
        }
        else
        {
            console.log(number+" Просте число");
} 
*/

//Task 2
/*
const userInput = prompt('Введіть число');
const number = parseInt(userInput);
let isPerfect = false; 

for (let n = 1; n <= number; n++) {
    let sum = 0;

    for (let d = 1; d <= n / 2; d++) {
        if (n % d === 0) {
            sum += d;
        }
    }

    if (sum === n) {
        console.log(n + ' - це досконале число!');
        isPerfect = true;
    }
}

if (!isPerfect) {
    console.log('Opps!');
}

*/
//Task 3

const userInput = prompt('Enter Number');
const number = parseInt(userInput);
let counter ="";
for (let i = 0; i <= number; i++) {
    for (let space = 1; space <= number - i; space++)
    {
        counter += " ";
            
    }
    for (let num = 1; num <= 2 * i - 1; num++)
        {
            counter += "*";
        }
        counter += "\n";
    
}console.log(counter);
