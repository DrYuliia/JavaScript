//Task 1
/*
const words = ["apple", "banaNA", "kiWi", "ORANGE"];
const capitalizedWords = [];

function capitalizeStrings(_arrayWords)
{
    console.log(_arrayWords);

    for (let index = 0; index < _arrayWords.length; index++)
        {
            const element = _arrayWords[index].toLowerCase();
            const firstLetter = element.charAt(0).toUpperCase();
            const restOfWord = element.slice(1);
            const capitalizedWord = firstLetter + restOfWord;
            capitalizedWords.push(capitalizedWord);
        }
            console.log(capitalizedWords);
            return capitalizedWords;
 } 
capitalizeStrings(words);
*/

//Task 2
/*
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
let commonElements =[];

console.log('Array 1', array1);
console.log('Array 2',array2);

function findCommonElements(array1, array2)
{
    for (let index = 0; index < array1.length; index++)
        {
         const element = array1[index];

        if (array2.includes(element) && !commonElements.includes(element)) {
            commonElements.push(element);
        }
}
    return commonElements;
}

console.log(findCommonElements(array1, array2));
*/

//Task 3
const numbers = [1, 2, 3, 4, 5];
 function analyzeArray(numbers)
 {
    let sum = 0;
    let min = numbers[0];
    let max = numbers[0];
     
     for (let i = 0; i < numbers.length; i++)
     {
         sum += numbers[i];
        
         if (numbers[i] < min)
         {
            min = numbers[i];
        }
         if (numbers[i] > max)
         {
            max = numbers[i];
        }
     } 
   let  average = sum / (numbers.length - 1);
           average = parseInt(average);

    return {
             sum: sum,
             average: average,
             min: min,
             max: max
           };
}
console.log(analyzeArray(numbers)); 