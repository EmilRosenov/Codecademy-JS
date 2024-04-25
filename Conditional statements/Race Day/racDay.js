let raceNumber = Math.floor(Math.random() * 1000);
// console.log(raceNumber);
let earlyRegistration = true;
let runnerAge = 18;

//console.log(earlyRegistration, runnerAge);
raceNumber =
  runnerAge > 18 && earlyRegistration ? (raceNumber += 1000) : raceNumber;
//console.log(raceNumber);

if (runnerAge > 18 && earlyRegistration) {
  console.log(`${raceNumber} will race at 9:30 am`);
} else if (runnerAge > 18 && !earlyRegistration) {
  console.log(`${raceNumber} will race at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`${raceNumber} will race at 12:30 pm`);
} else {
  console.log(`${raceNumber} see the registration desk.`);
}
