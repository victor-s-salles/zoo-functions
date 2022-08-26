const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = species.filter((elememento) => ids.some((testeID) => elememento.id === testeID));

  return animals;
}

module.exports = getSpeciesByIds;
