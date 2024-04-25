function analyzeArray(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  const average = array.reduce((acc, val) => acc + val, 0) / length;

  return { average, min, max, length };
}

module.exports = analyzeArray;