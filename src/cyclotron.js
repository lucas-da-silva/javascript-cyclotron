import circulateElectron from './circulateElectron.js';
import circulateNeutron from './circulateNeutron.js';
import circulateProton from './circulateProton.js';

const PARTICLES_MAPPING = {
  e: circulateElectron,
  n: circulateNeutron,
  p: circulateProton,
};

function cyclotron(particle, matrix) {
  if (PARTICLES_MAPPING[particle]) {
    return PARTICLES_MAPPING[particle](matrix);
  }
  return matrix;
}

export default cyclotron;
