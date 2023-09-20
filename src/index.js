//Task 1
const arrayNumbers = [1, 6, 9, 5, 2, 3, 12, 7, 8, 9, 10, 22, 4, 6, 8, 9, 10, 12, 14];
const isSimple = function (number)
{
  let counter = 0;
  for (let n = 1; n <= number; n++) {
      if (number % n === 0)
      {
      counter++;
     }
  }
  return counter === 2; 
};
const arraySimpleNumbers = arrayNumbers.filter((number) => isSimple(number));
console.log(arraySimpleNumbers);

