const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeId = employees.find((employee) => employee.id === id);
  const specieId = employeeId.responsibleFor[0];
  const currentSpecie = species.find((specie) => specie.id === specieId);
  const oldestAnimal = currentSpecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldestAnimal[0]);
}

module.exports = getOldestFromFirstSpecies;
