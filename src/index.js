//Task 1

const userInput = prompt('Enter Number');
const parsedInput = parseInt(userInput);
const result_a = parsedInput
const result = (result_a % 3 === 0 && result_a % 5 === 0) ? 'Fizz Buzz' :
               (result_a % 5 === 0) ? "Buzz" :
               (result_a % 3 === 0) ? 'Fizz' : 'Oops it is not a nuber  or a number that is not divisible by 3 and 5';
console.log(result);


//Другий спосіб виконання першого завдання

/*
const userInput = prompt('Enter Number');
const parsedInput = parseInt(userInput);
const result_a = parsedInput
 if  (result_a % 3 === 0 && result_a % 5 === 0) {
     console.log('FizzBuzz');
}
else if  (result_a % 3 === 0) {
    console.log('Fizz');
 }
else if (result_a % 5 === 0) {
   console.log('Buzz');
}
else { 
   console.log("Oops it is not a nuber  or a number that is not divisible by 3 and 5");
}
*/

//Task 2
/*
const userInput = prompt('Enter the year, please.');
const parsedInput = parseInt(userInput);
const year = parsedInput;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
{
    console.log("Високосний рік");
}

else { 
   console.log("Не високосний рік");
}
*/
//Другий спосіб виконання Task2
/*
const userInput = prompt('Enter the year, please.');
const parsedInput = parseInt(userInput);
const year = parsedInput;
const result = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? "Високосний рік" : "Не високосний рік";
console.log(result);
*/


//Task 3
/*
const userInput = prompt('Введіть ваш вік:');
const parsedInput = parseInt(userInput);
const num = parsedInput;
 

if (num==1 ||num==21 ||num==31 ||num==41 ||num==51 ||num==61 ||num==71 ||num==81 ||num==91 ||num==101) {
    
    console.log("Вам " + num + " рік!");
}
else if (num==2||num==3 ||num==4 || num>=22&&num<=24 || num>=32&&num<=34 || num>=42&&num<=44  || num>=52&&num<=54 || num>=62&&num<=64 || num>=72&&num<=74 || num>=82&&num<=84 || num>=92&&num<=44 ||num==102)
{ 
     console.log("Вам " + num + " роки!");
}
    else if (num>=5 ||  num<=20 || num>=25&&num<=30 || num>=35 &&  num<=40 || num>=45 && num<=50  || num>=55 && num<=60 || num>=65 && num<=70 || num>75 && num<=80 || num>=85 && num<=90 || num==105)
{ 
      console.log("Вам " + num + " років!");
}
else if (num > 105) {
    console.log("Хм..якийсь нереальний вік");
}

else {
    alconsole.log("Opps. Ви ввели невірні дані!");
   }     


*/
