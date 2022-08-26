const data = require('../data/zoo_data');

const animais = data.species;

function caseUndefined() {
  const newAnimais = animais.reduce((acc, element) => {
    acc[element.name] = element.residents.length;
    return acc;
  }, {});
  return newAnimais;
}
function caseSpecie(especie) {
  const animal = especie.specie;
  const findAnimal = animais.find((element) => animal === element.name);
  return findAnimal.residents.length;
}

function caseSpecieAndSex(especie) {
  const animal = especie.specie;
  const sexo = especie.sex;
  const findAnimalEsp = animais.find((element) => animal === element.name);
  const listaAnimaisEspecie = findAnimalEsp.residents;
  const findAnimalSex = listaAnimaisEspecie.filter((element) => element.sex === sexo);
  return findAnimalSex.length;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return caseUndefined();
  }
  if (!animal.sex) {
    return (caseSpecie(animal));
  }
  return caseSpecieAndSex(animal);
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
