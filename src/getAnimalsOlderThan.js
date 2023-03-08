const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const speciesOfAnimals = species.find((specie) => specie.name === animal).residents;
  return speciesOfAnimals.every((animalAge) => animalAge.age >= age);
}

module.exports = getAnimalsOlderThan;
