const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeId = employees.find((employee) => employee.id === id);
  const oldestEmployee = employeeId.responsibleFor[0];
  const speciesAndEmployee = species.find((specie) => specie.id === oldestEmployee);
  const oldestAnimal = speciesAndEmployee.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldestAnimal[0]);
}

module.exports = getOldestFromFirstSpecies;
