const data = require('../data/zoo_data');

const collaborators = data.employees;
const animalsList = data.species;

const getSpecies = (id) => {
  const collaborator = collaborators.find((element) => element.id === id);
  const animals = collaborator.responsibleFor.map((element) => animalsList
    .find((element2) => element2.id === element));
  const names = animals.map((element) => element.name);
  const locations = animals.map((element) => element.location);
  return [names, locations];
};

getSpecies('c1f50212-35a6-4ecd-8223-f835538526c2');

const listCollaborators = () => {
  const newList = collaborators.map((element) => ({
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: getSpecies(element.id)[0],
    locations: getSpecies(element.id)[1],
  }));
  return newList;
};

const testExistence = (par) => {
  const listaPessoas = listCollaborators();
  const pessoa = listaPessoas.find((element) => element.fullName.includes(par.name)
    || element.id.includes(par.id));
  if (!pessoa) {
    throw new Error('Informações inválidas');
  }
  return pessoa;
};

function getEmployeesCoverage(par) {
  if (!par) {
    return listCollaborators();
  }
  if (par.id || par.name) {
    return testExistence(par);
  }
}

module.exports = getEmployeesCoverage;

getEmployeesCoverage();
