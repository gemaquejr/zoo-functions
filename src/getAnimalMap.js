const data = require('../data/zoo_data');

const { species } = data;

function speciesSex(specie, options) {
  const getSpecie = species.find(({ name }) => name === specie);
  const { residents } = getSpecie;
  const allSpecieResidents = {
    [specie]: residents.map(({ name }) => name),
  };

  if ('sex' in options) {
    const allResidentsBySex = residents.filter((resident) => resident.sex === options.sex);
    allSpecieResidents[specie] = allResidentsBySex.map((resident) => resident.name);
  }
  if ('sorted' in options) {
    allSpecieResidents[specie].sort();
  }
  return allSpecieResidents;
}

function namesOfSpecies(coordinates, options) {
  const speciesCoordinate = {};
  const { NE, NW, SE, SW } = coordinates;
  speciesCoordinate.NE = NE.map((specie) => speciesSex(specie, options));
  speciesCoordinate.NW = NW.map((specie) => speciesSex(specie, options));
  speciesCoordinate.SE = SE.map((specie) => speciesSex(specie, options));
  speciesCoordinate.SW = SW.map((specie) => speciesSex(specie, options));
  return speciesCoordinate;
}

function getAnimalMap(options) {
  // seu código aqui
  const returnNames = {
    NE: species.filter(({ location }) => location === 'NE').map(({ name }) => name),
    NW: species.filter(({ location }) => location === 'NW').map(({ name }) => name),
    SE: species.filter(({ location }) => location === 'SE').map(({ name }) => name),
    SW: species.filter(({ location }) => location === 'SW').map(({ name }) => name),
  };

  if (!options || !options.includeNames) {
    return returnNames;
  }
  return namesOfSpecies(returnNames, options);
}

module.exports = getAnimalMap;
