const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalListTotal = data.species;
  const coloaboratorList = data.employees;
  const colaborator = coloaboratorList.find((elemento) => elemento.id === id);
  const animalId = colaborator.responsibleFor[0];
  const animal = animalListTotal.find((elemento) => elemento.id === animalId);
  const oldAnimal = animal.residents.reduce((acc, elemento) => {
    if (elemento.age < acc.age) {
      return acc;
    }
    return elemento;
  });
  const { name, sex, age } = oldAnimal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
