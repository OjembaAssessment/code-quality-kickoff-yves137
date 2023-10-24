function calculateMatrixSum(matrix) {
  return matrix.flat().reduce((sum, currentNumber) => sum + currentNumber, 0);
}
