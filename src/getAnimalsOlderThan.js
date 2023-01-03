const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const lista = data.species;
  const animalBuscado = lista.find((elemento) => elemento.name === animal);
  const { residents } = animalBuscado;

  console.log(residents);
  return animalBuscado.residents.every((test) => test.age >= age);
}

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('otters', 7));
// // console.log(getAnimalsOlderThan('penguins', 10));
// // getAnimalsOlderThan('penguins', 10);
