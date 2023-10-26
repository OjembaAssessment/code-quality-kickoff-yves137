function fibonacci(inputNumber) {
  if (inputNumber <= 1) return inputNumber;
  return fibonacci(inputNumber - 1) + fibonacci(inputNumber - 2);
}
