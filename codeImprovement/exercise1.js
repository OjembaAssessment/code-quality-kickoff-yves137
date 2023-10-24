export default function calculateAverage(numbers) {
  return numbers.reduce((sum, currentNumber) => sum + currentNumber, 0) / (numbers.length || 1);
}
