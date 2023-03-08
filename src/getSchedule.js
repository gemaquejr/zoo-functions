const data = require('../data/zoo_data');

const { species, hours } = data;

const daysWeekend = Object.keys(hours);

function getSpecieAvailableByDay(day) {
  return species.filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);
}

const getAllDays = ((...weekend) => {
  const schedule = {};
  weekend.forEach((value) => {
    if (value !== 'Monday') {
      const { open, close } = hours[value];
      schedule[value] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: getSpecieAvailableByDay(value),
      };
    } else {
      schedule.Monday = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return schedule;
});

function getSchedule(scheduleTarget) {
  const allSpecies = species.map((specie) => specie.name);
  const findDay = daysWeekend.find((day) => day === scheduleTarget);

  if (!scheduleTarget) {
    return getAllDays(...daysWeekend);
  }
  if (allSpecies.includes(scheduleTarget)) {
    const checkSpecie = species.find((specie) => specie.name === scheduleTarget);
    const { availability } = checkSpecie;
    return availability;
  }
  if (daysWeekend.includes(scheduleTarget)) {
    return getAllDays(findDay);
  }
  return getAllDays(...daysWeekend);
}

module.exports = getSchedule;
