import cyclotron from './cyclotron.js';

function createMatrix(matrixSize) {
  const matrix = new Array(matrixSize).fill(null).map(() => new Array(matrixSize).fill(1));
  return matrix;
}

console.log('Cyclotron without particles:');
console.log(cyclotron('', createMatrix(4)));

console.log('\nAccelerating an electron:');
console.log(cyclotron('e', createMatrix(4)));

console.log('\nAccelerating a proton (4x4):');
console.log(cyclotron('p', createMatrix(4)));

console.log('\nAccelerating a proton (6x6):');
console.log(cyclotron('p', createMatrix(6)));

console.log('\nAccelerating a neutron:');
console.log(cyclotron('n', createMatrix(4)));
