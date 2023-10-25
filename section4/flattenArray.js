function getNestingLevel(inputArray) {
  if (!Array.isArray(inputArray)) return 0;

  if (inputArray.length === 0) return 1;

  //   calculate nesting max level of an input array
  const maxNestedLevel = Math.max(...inputArray.map((item) => getNestingLevel(item)));

  return 1 + maxNestedLevel;
}

function flattenArray(inputArray) {
  const level = getNestingLevel(inputArray);
  if (level === 1) return inputArray;
  return inputArray.flat(level);
}
