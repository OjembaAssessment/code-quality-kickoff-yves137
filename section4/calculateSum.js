function calculateSum(inputArray) {
  if (inputArray.length === 0) return 0;
  if (inputArray.length === 1) return inputArray[0];
  return inputArray[0] + calculateSum(inputArray.slice(1));
}
