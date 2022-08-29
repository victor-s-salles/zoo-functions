const data = require('../data/zoo_data');

const pHours = data.hours;
const animaisList = data.species;

const allAnimals = (day) => {
  const list = animaisList.filter((element) => element.availability
    .some((element2) => element2 === day)).map((element3) => element3.name);
  return list;
};

const totalWeek = () => {
  const dias = {
    Tuesday: { officeHour: `Open from ${pHours.Tuesday.open}am until ${pHours.Tuesday.close}pm`,
      exhibition: allAnimals('Tuesday') },
    Wednesday: { officeHour: `Open from ${pHours.Wednesday.open}am until ${pHours
      .Wednesday.close}pm`,
    exhibition: allAnimals('Wednesday') },
    Thursday: { officeHour: `Open from ${pHours.Thursday.open}am until ${pHours.Thursday.close}pm`,
      exhibition: allAnimals('Thursday') },
    Friday: { officeHour: `Open from ${pHours.Friday.open}am until ${pHours.Friday.close}pm`,
      exhibition: allAnimals('Friday') },
    Saturday: { officeHour: `Open from ${pHours.Saturday.open}am until ${pHours.Saturday.close}pm`,
      exhibition: allAnimals('Saturday') },
    Sunday: { officeHour: `Open from ${pHours.Sunday.open}am until ${pHours.Sunday.close}pm`,
      exhibition: allAnimals('Sunday') },
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return dias;
};

const ifAnimal = (animal) => {
  const { availability } = animaisList.find((element) => element.name === animal);
  return availability;
};
const ifDay = (day) => ({ [day]: totalWeek()[day] });

function getSchedule(scheduleTarget) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const testAnimal = animaisList.some((element) => element.name === scheduleTarget);
  const testDay = daysOfWeek.some((element) => element === scheduleTarget);
  if (testAnimal) {
    return ifAnimal(scheduleTarget);
  }
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  if (testDay) {
    return ifDay(scheduleTarget);
  }

  return totalWeek();
}

module.exports = getSchedule;

console.log(getSchedule('Wednesday'));
