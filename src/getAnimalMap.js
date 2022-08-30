const data = require('../data/zoo_data');

const animais = data.species;

const findSpecies = (region) => {
  const aniamaisNE = animais.filter((elemento) => elemento.location === region);
  const arrayAnimals = aniamaisNE.map((elemento) => elemento.name);
  return arrayAnimals;
};

const onlySpecies = () => {
  const location = {
    NE: findSpecies('NE'),
    NW: findSpecies('NW'),
    SE: findSpecies('SE'),
    SW: findSpecies('SW'),
  };
  return location;
};
const createObjSpeciesAndName = (options) => {
  const estrutura = { NE: [], NW: [], SE: [], SW: [] };
  animais.forEach((animal) => {
    const obj = {};
    const nameList = [];
    nameList[animal.name] = [];
    animal.residents.forEach((residente) => {
      if (!options.sex || residente.sex === options.sex) {
        nameList[animal.name].push(residente.name);
      }
    });
    if (options.sorted) { nameList[animal.name].sort(); }
    obj[animal.name] = nameList[animal.name];
    estrutura[animal.location].push(obj);
  });
  return estrutura;
};

function getAnimalMap(options) {
  let structure = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  if (!options) {
    return onlySpecies();
  }
  if (!options.includeNames) {
    structure = onlySpecies();
  } if (options.includeNames) {
    structure = createObjSpeciesAndName(options);
  }
  return structure;
}
// console.log(getAnimalMap());

module.exports = getAnimalMap;
