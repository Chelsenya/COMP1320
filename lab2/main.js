const getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
const makeCalendar = require("./lab-two").makeCalendar;
const readline = require("readline-sync");

makeCalendar();

function getDayOfTheWeekForUserDate() {
  const year = parseInt(readline.question("Enter a year: "));
  const month = readline.question("Enter a month: ");
  const date = parseInt(readline.question("Enter a date: "));

  console.log(`You have entered: ${year}, ${month}, ${date}.`);

  const dayOfTheWeek = getDayOfTheWeek(year, month, date);
  console.log(dayOfTheWeek);
}

getDayOfTheWeekForUserDate();
