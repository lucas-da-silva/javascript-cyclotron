function circulateProton(matrix) {
  const matrixSize = matrix.length;
  const matrixCopy = matrix.slice();
  const lastPosition = matrixSize - 1;

  for (let i = 0; i < matrixSize; i += 1) {
    matrixCopy[0][i] = 'p';
    matrixCopy[i][0] = 'p';
    if (i < lastPosition) {
      matrixCopy[lastPosition][i] = 'p';
      matrixCopy[i][lastPosition] = 'p';
    }
  }
  matrixCopy[lastPosition - 1][lastPosition - 1] = 'p';

  return matrixCopy;
}

export default circulateProton;
