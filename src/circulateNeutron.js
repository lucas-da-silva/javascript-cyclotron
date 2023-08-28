function circulateNeutron(matrix) {
  const matrixCopy = matrix.slice();
  for (let i = 0; i < matrix.length; i += 1) {
    matrixCopy[0][i] = 'n';
  }
  return matrixCopy;
}

export default circulateNeutron;
