const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const { species } = data;
  const animalObjects = {};
  if (!animal) {
    species.forEach((specie) => {
      animalObjects[specie.name] = specie.residents.length;
    });
    return animalObjects;
  }

  const animals = species.find((specie) => specie.name === animal.specie);
  const animalsResidents = animals.residents;
  if (!animal.sex) {
    return animalsResidents.length;
  }
  return animalsResidents.filter((genre) => genre.sex === animal.sex).length;
}

module.exports = countAnimals;
