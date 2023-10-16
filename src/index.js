function isPalindrome(n) {
  return n.toString() === n.toString().split('').reverse().join('');
}

function reverseAndAdd(initialNum) {
  let steps = 0;
  let currentNumber = initialNum;

  while (steps < 1000) { 
    if (isPalindrome(currentNumber)) {
      return { result: currentNumber, steps };
    } else {
      currentNumber += parseInt(currentNumber.toString().split('').reverse().join(''));
      steps++;
    }
  }

  return { result: null, steps };
}


const result = reverseAndAdd(96)
console.log(result);
