const data = require('../data/zoo_data');

function isManager(id) {
  const colaboradores = data.employees;
  const colaborador = colaboradores.find((test) => test.id === id);
  const testeGerente = colaboradores.some((test) => test.managers
    .some((test2) => (test2 === colaborador.id)));
  return testeGerente;
}

function getRelatedEmployees(managerId) {
  const colaboradores = data.employees;
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const pessoas = colaboradores.filter((test) => (test.managers
    .some((test2) => test2 === managerId)));
  const nomePessoas = pessoas.map((pGeren) => `${pGeren.firstName} ${pGeren.lastName}`);
  return nomePessoas;
}

module.exports = { isManager, getRelatedEmployees };

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
