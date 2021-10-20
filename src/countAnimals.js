const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const animalObjects = {};
  if (animal === undefined) {
    species.forEach((specie) => {
      animalObjects[specie.name] = specie.residents.length;
    });
    return animalObjects;
  }
  if (animal.specie && animal.sex === undefined) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  if (animal.sex) {
    const animals = species.find((specie) => specie.name === animal.specie).residents;
    return animals.filter((genre) => genre.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
