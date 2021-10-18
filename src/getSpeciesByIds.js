const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const speciesOfAnimalsById = [];
  ids.forEach((id) => {
    speciesOfAnimalsById.push(species.find((specie) => specie.id === id));
  });
  return speciesOfAnimalsById;
}

module.exports = getSpeciesByIds;
