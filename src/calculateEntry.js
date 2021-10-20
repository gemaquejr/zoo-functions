const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.entries(entrants).length < 1) {
    return 0;
  }
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entries) {
  // seu código aqui
  const entrants = countEntrants(entries);
  if (entrants === undefined) {
    return 0;
  }
  const totalChild = entrants.child * prices.child;
  const totalAdult = entrants.adult * prices.adult;
  const totalSenior = entrants.senior * prices.senior;
  const totalPeoples = totalChild + totalAdult + totalSenior;
  if (!totalPeoples) {
    return 0;
  }
  return totalPeoples;
}

module.exports = { calculateEntry, countEntrants };
