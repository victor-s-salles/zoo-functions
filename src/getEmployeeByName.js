const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const colaboradores = data.employees;
  const colaborador = colaboradores.find((test) => (test.firstName === employeeName
    || test.lastName === employeeName));
  return colaborador === undefined ? {} : colaborador;
}

module.exports = getEmployeeByName;

// console.log(getEmployeeByName());
