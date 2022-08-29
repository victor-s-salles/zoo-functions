const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((person) => person.age < 18);
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50);
  const senior = entrants.filter((person) => person.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const separateAge = countEntrants(entrants);
  const { child, adult, senior } = separateAge;
  const { prices } = data;
  return (child * prices.child + adult * prices.adult + senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
