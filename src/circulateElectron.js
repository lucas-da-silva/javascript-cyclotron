function circulateElectron(matrix) {
  const matrixSize = matrix.length;
  const matrixCopy = matrix.slice();

  for (let i = 0; i < matrixSize; i += 1) {
    matrixCopy[0][i] = 'e';
    matrixCopy[i][matrixSize - 1] = 'e';
  }

  return matrix;
}

export default circulateElectron;
