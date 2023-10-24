function solution(numeric: number): string {
  const numbericEquivalent: number[] = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];
  const romanSymbols: string[] = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let romanNumber: string = "";
  for (let i = 0; i < numbericEquivalent.length; i++) {
    while (numeric >= numbericEquivalent[i]) {
      numeric -= numbericEquivalent[i];
      romanNumber += romanSymbols[i];
    }
  }
  return romanNumber;
}
