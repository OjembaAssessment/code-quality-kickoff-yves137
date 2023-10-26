function isPrime(inputNumber) {
  if (inputNumber < 2) return false;
  const limitCheck = Math.floor(inputNumber / 2);

  for (let i = 2; i <= limitCheck; i++)
    if (inputNumber % i === 0) return false;

  return true;
}
