const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = data.species.filter((elememento) => ids.some((testeID) =>
    (elememento.id === testeID)));

  return animals;
}

module.exports = getSpeciesByIds;
