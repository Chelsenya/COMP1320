const monthCodes = {
  January: 1,
  February: 4,
  March: 4,
  April: 0,
  May: 2,
  June: 5,
  July: 0,
  August: 3,
  September: 6,
  October: 1,
  November: 4,
  December: 6,
};

function getDayOfTheWeek(year, month, day) {
  const fitTwelves = Math.floor((year % 100) / 12);
  const remainder = (year % 100) % 12;
  const fitFours = Math.floor(remainder / 4);
  let monthCode = monthCodes[month];

  if (isLeapYear(year)) {
    if (month == "January" || month == "February") {
      monthCode--;
    }
  }

  switch (Math.floor(year / 100)) {
    case 16:
      monthCode += 6;
      break;
    case 17:
      monthCode += 4;
      break;
    case 18:
      monthCode += 2;
      break;
    case 20:
      monthCode += 6;
      break;
    case 21:
      monthCode += 4;
      break;
  }

  let dayOfWeekCode = 0;
  const dayOfWeek = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  dayOfWeekCode = (fitTwelves + remainder + fitFours + day + monthCode) % 7;

  return dayOfWeek[dayOfWeekCode];
}

function isLeapYear(year) {
  let isLeapYear = false;
  if (year % 4 == 0 && year % 100 != 0 && year % 400 != 0) {
    isLeapYear = true;
  }
  return isLeapYear;
}

function makeCalendar() {
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const months = Object.keys(monthCodes);

  for (const month of months) {
    let dayIndex = months.indexOf(month);
    let days = daysInMonths[dayIndex];
    let monthNum = dayIndex + 1;

    for (let i = 1; i <= days; i++) {
      console.log(
        `${monthNum}-${i}-2023 is a ${getDayOfTheWeek(2023, month, i)}`
      );
    }
  }
}

module.exports = { getDayOfTheWeek, isLeapYear, makeCalendar };
