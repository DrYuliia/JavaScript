//Task 1
/*
function sumArrayPromise(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Array.isArray(arr)) {
        const sum = arr.reduce((acc, current) => acc + current, 0);
        resolve(sum);
      } else {
        reject("Input is not an array");
      }
    }, 3000);
  });
}

sumArrayPromise([1, 2, 3, 4, 5])
  .then(result => console.log(result))
  .catch(error => console.error(error));
*/
//Task 2
function concurrentPromises(promises, maxConcurrent) {
  return new Promise((resolve, reject) => {
    const results = [];
    let currentIndex = 0;
    let runningPromises = 0;

    function runNextPromise() {
      if (currentIndex >= promises.length) {
        if (runningPromises === 0) {
          resolve(results);
        }
        return;
      }

      while (runningPromises < maxConcurrent) {
        const promise = promises[currentIndex];
        const index = currentIndex;
        currentIndex++;

        promise()
          .then(result => {
            results[index] = result;
          })
          .catch(error => {
            results[index] = error;
          })
          .finally(() => {
            runningPromises--;
            runNextPromise();
          });

        runningPromises++;
      }
    }

    runNextPromise();
  });
}


const promises = [
  () => new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000)),
  () => new Promise(resolve => setTimeout(() => resolve('Promise 2'), 500)),
  () => new Promise(resolve => setTimeout(() => resolve('Promise 3'), 800))
];

concurrentPromises(promises, 2).then(result => {
  console.log(result);
});
