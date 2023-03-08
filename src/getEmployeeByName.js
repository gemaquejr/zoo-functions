const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const employeeFirstName = employees.find((employee) => employee.firstName === employeeName);
  const employeeLastName = employees.find((employee) => employee.lastName === employeeName);
  if (employeeFirstName) {
    return employeeFirstName;
  }
  if (employeeLastName) {
    return employeeLastName;
  }
}

module.exports = getEmployeeByName;
