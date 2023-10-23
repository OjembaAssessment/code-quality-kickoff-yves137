export default function solution(roman) {
  let numericEquivalent = 0;
  const romanNumbers = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };
  for (let i = 0; i < roman.length; i++) {
    if (romanNumbers[roman[i]] > romanNumbers[roman[i - 1]]) {
      numericEquivalent += romanNumbers[roman[i]] - 2 * romanNumbers[roman[i - 1]];
    } else {
      numericEquivalent += romanNumbers[roman[i]];
    }
  }
  return numericEquivalent;
}
