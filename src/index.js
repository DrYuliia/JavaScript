//Task1
function logArguments(fn) {
  return function (...args) {
    console.log("Arguments:", args);
    return fn(...args);
  }
}

function add(a, b) {
  return a + b;
}

const loggedAdd = logArguments(add);

const result = loggedAdd(1, 2);

