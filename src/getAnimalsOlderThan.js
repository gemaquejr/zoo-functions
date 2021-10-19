const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const speciesOfAnimals = species.find((specie) => specie.name === animal);
  const speciesOfAnimalsAge = speciesOfAnimals.residents.every((animalAge) => animalAge.age >= age);
  return speciesOfAnimalsAge;
}

module.exports = getAnimalsOlderThan;
