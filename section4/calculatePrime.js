function isPrime(inputNumber) {
  // check if the inputNumber is less than 2
  if (inputNumber < 2) return false;

  //   calculate the limit value for iteration
  const limitCheck = Math.floor(inputNumber / 2);

  for (let i = 2; i <= limitCheck; i++)
    if (inputNumber % i === 0) return false;

  return true;
}
