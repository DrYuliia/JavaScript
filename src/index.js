//Task 1
function randomDelayPrint(message, index = 0) {
  if (index < message.length) {
    const letter = message[index];
    const timer = Math.random() * 1000; 
    setTimeout(function() {
      console.log(letter);
      randomDelayPrint(message, index + 1);
    }, timer);
  }
}

randomDelayPrint("Hunter");
