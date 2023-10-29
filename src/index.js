function* fibonacci(n) {
  let current = 0;
  let next = 1;

  while (current < n) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const fibGen = fibonacci(10);

console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);



