
//Task 1
/*
const originalArray = [1, 2, 3, 4, 5];
let reversedArray = [];
console.log(originalArray);

function reverseArray(originalArray)
{
    for (i =originalArray.length - 1; i >= 0; i--)
    {
        reversedArray[reversedArray.length] = originalArray[i];    
    }
    return console.log(reversedArray);
}
reverseArray(originalArray);

*/

//Task 2

/*
const array1 = [1, 2, 3, 4, 5,2];
const array2 = [3, 4, 5, 6, 7, 10];
let uniqueValuesArray = [];

console.log('Array 1', array1);
console.log('Array 2',array2);

function uniqueValues(array1, array2) { 
    for (let i = 0; i < array1.length; i++) {
        let duplicate = false;
        
        for (let j = 0; j < uniqueValuesArray.length; j++) {
            if (array1[i] === uniqueValuesArray[j]) {
                duplicate = true;
                break;
            }
        }
        
        if (!duplicate) {
            uniqueValuesArray[uniqueValuesArray.length] = array1[i]; 
        }
    }
    for (let i = 0; i < array2.length; i++) {
        let duplicate = false;
        
        for (let j = 0; j < uniqueValuesArray.length; j++) {
            if (array2[i] === uniqueValuesArray[j]) {
                duplicate = true;
                break;
            }
        }
        
        if (!duplicate) {
            uniqueValuesArray[uniqueValuesArray.length] = array2[i]; 
        }
    }
    return console.log('Unique array',uniqueValuesArray);
}

uniqueValues(array1, array2);
*/

//Task 3
let totalGrades = 0;
let averageGrade = 0;
const students = [
    {
        name: "Alice",
        age: 20,
        grade: 4.5
    },
    {
        name: "Bob",
        age: 21,
        grade: 3.9
    },
    {
        name: "Charlie",
        age: 19,
        grade: 4.8
    }
];

function calculateAverageGrade(students)
{ 
    for (let i = 0; i < students.length; i++)
    {
        
            totalGrades += students[i].grade;
        
    }
    averageGrade = totalGrades / students.length;
    return console.log( averageGrade.toFixed(1));
}
calculateAverageGrade(students);