const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((personAge) => personAge.age < 18).length;
  const adult = entrants.filter((personAge) => personAge.age >= 18 && personAge.age < 50).length;
  const senior = entrants.filter((personAge) => personAge.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length < 1) return 0;
  const totalPerson = countEntrants(entrants);
  const { child, adult, senior } = totalPerson;
  const { prices } = data;
  const totalPeoples = ((child * prices.child) + (adult * prices.adult) + (senior * prices.senior));
  return totalPeoples;
}

module.exports = { calculateEntry, countEntrants };
