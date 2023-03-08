const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const managerIndex = employees.some((employee) => employee.managers.includes(id));
  return managerIndex;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const collaborators = employees.filter((employee) => employee.managers.includes(managerId));
  return collaborators.map((names) => `${names.firstName} ${names.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
