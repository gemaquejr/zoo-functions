const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function speciesSex(specie, options) {
  if ('sex' in options) {
    return specie.residents
      .filter((resident) => resident.sex === options.sex)
      .map((resident) => resident.name);
  }
  return specie.residents.map((resident) => resident.name);
}

function namesOfSpecies(options) {
  if ('includeNames' in options) {
    const coordinates = { NE: [], NW: [], SE: [], SW: [] };
    species.forEach((specie) => {
      const { name, location } = specie;
      const animalNames = speciesSex(specie, options);
      if ('sorted' in options) animalNames.sort();
      coordinates[location].push({ [name]: animalNames });
    });
    return coordinates;
  }
}

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined || options.includeNames === undefined) {
    const coordinates = { NE: [], NW: [], SE: [], SW: [] };
    species.forEach((specie) => {
      const { name, location } = specie;
      coordinates[location].push(name);
    });
    return coordinates;
  }
  return namesOfSpecies(options);
}

module.exports = getAnimalMap;
