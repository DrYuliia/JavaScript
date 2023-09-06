//Task 1
/*
const userInput = prompt('Enter string please:');
const getString = userInput;
const  newString = '' + getString;

function reverseString(str)
{
    let newString = '';
    
  for (let i =str.length - 1; i >= 0; i--)
    { 
        newString = newString + str[i] ;
    }
    return newString;
   
}
console.log(getString);
console.log(reverseString(newString));
*/

//Task 2
/*
const userInput = prompt('Enter word:');
const getWord = userInput;
const  newWord = '' + getWord;

function isPalindrome(str)
{
    let newString = '';
    
  for (let i =str.length - 1; i >= 0; i--)
    { 
        newString = newString + str[i] ;
    }
    if (newWord === newString) {
        console.log('Цей рядок - паліндром');
    }
    else
    {
        console.log('Oops!  Цей рядок  не  паліндром');
     }
    return newString;
  
}
console.log(getWord +' - ' + isPalindrome(newWord));
*/
 
//Task 3


let userInput_a = prompt('Enter Number a');
let userInput_b  = prompt('Enter Number b');
let a = parseInt(userInput_a);
let b = parseInt(userInput_b);



if (!isNaN(a) && !isNaN(b))
{
    const gcd = findGCD(a, b);
    
    console.log('НСД: ' + gcd);
}
else
{
    console.log('Некоректні вхідні дані. Введіть числа.');
}

function findGCD(a, b)
{
   for (let i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
           gcd = i;
        }
    }
   
    return gcd;

}





