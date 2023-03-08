const data = require('../data/zoo_data');

const { employees, species } = data;

const checkEntrance = (identify) => {
  const allEmpFirstName = employees.map((employee) => employee.firstName);
  const allEmpLastName = employees.map((employee) => employee.lastName);
  const allEmployeesId = employees.map((employee) => employee.id);
  if (allEmpFirstName.includes(identify) || allEmpLastName.includes(identify)
    || allEmployeesId.includes(identify)) {
    return true;
  }
  return false;
};

const getSpecies = (ids) => ids.map((id) => {
  const animal = species.find((specie) => specie.id === id);
  return animal.name;
});

const getLocations = (animals) => animals.map((animal) => species.find((specie) =>
  specie.name === animal).location);

const organizeInfo = () => employees.map((employee) => {
  const { firstName, responsibleFor, lastName, id } = employee;
  const fullName = `${firstName} ${lastName}`;
  return {
    id,
    fullName,
    species: getSpecies(responsibleFor),
    locations: getLocations(getSpecies(responsibleFor)),
  };
});

function getEmployeesCoverage(options) {
  if (!options) return organizeInfo();
  const identify = Object.values(options)[0];
  if (checkEntrance(identify) === false) {
    throw new Error('Informações inválidas');
  }
  const getEmployee = (info) => employees.find((employ) => {
    const { firstName, lastName, id } = employ;
    return (firstName === info || lastName === info || id === info);
  });
  const persona = getEmployee(identify);
  const { id, firstName, lastName, responsibleFor } = persona;
  const fullName = `${firstName} ${lastName}`;
  return {
    id,
    fullName,
    species: getSpecies(responsibleFor),
    locations: getLocations(getSpecies(responsibleFor)),
  };
}

module.exports = getEmployeesCoverage;
