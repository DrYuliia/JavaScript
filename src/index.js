//Task 1

function summarize(num)
{
  if (num === undefined)
  {
    num = 1;
  }
    return function sum(arg)
    {
      return num + arg;
    };
}

const num = summarize(5);
console.log(num(3)); 

const number = summarize();
console.log(number(6)); 
