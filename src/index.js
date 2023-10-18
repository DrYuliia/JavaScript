//Task 1
function randomDelayPrint(message, index = 0) {
  if (index < message.length) {
    const letter = message[index];
    const timer = Math.random() * 1000; // Випадкова затримка від 0 до 1 секунди
    setTimeout(function() {
      console.log(letter);
      randomDelayPrint(message, index + 1); // Рекурсивний виклик для наступної літери
    }, timer);
  }
}

randomDelayPrint("Hunter");
