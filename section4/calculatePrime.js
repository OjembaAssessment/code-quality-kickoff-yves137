function isPrime(inputNumber) {
  // check if the inputNumber is less than 2
  if (Math.abs(inputNumber) < 2) return false;

  //   calculate the limit value for iteration
  const limitCheck = Math.floor(Math.abs(inputNumber) / 2);

  for (let i = 2; i <= limitCheck; i++)
    if (inputNumber % i === 0) return false;

  return true;
}
