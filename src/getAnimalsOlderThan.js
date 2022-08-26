const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const lista = data.species;
  const animalBuscado = lista.filter((elemento) => elemento.name === animal);
  // console.log(animalBuscado);
  const [arrayResidents] = animalBuscado;
  console.log(arrayResidents);
  const { residents } = arrayResidents;
  return residents.every((test) => test.age >= age);
}

module.exports = getAnimalsOlderThan;

// console.log(getAnimalsOlderThan('otters', 7));
// // console.log(getAnimalsOlderThan('penguins', 10));
// // getAnimalsOlderThan('penguins', 10);
