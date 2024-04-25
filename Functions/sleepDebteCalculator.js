const getSleepHours = (day) => {
  let sleepHours = 0;
  switch (day) {
    case "Monday":
      sleepHours = 5;
      return sleepHours;
    case "Tuesday":
      sleepHours = 6;
      return sleepHours;
    case "Wednesday":
      sleepHours = 7;
      return sleepHours;
    case "Thursday":
      sleepHours = 8;
      return sleepHours;
    case "Friday":
      sleepHours = 9;
      return sleepHours;
    case "Saturday":
      sleepHours = 10;
      return sleepHours;
    case "Sunday":
      sleepHours = 11;
      return sleepHours;

    default:
      console.log("Invalid day!");
      break;
  }
};

// console.log(getSleepHours("Monday"));
// console.log(getSleepHours("Tuesday"));
// console.log(getSleepHours("Wednesday"));
// console.log(getSleepHours("Thursday"));
// console.log(getSleepHours("Friday"));
// console.log(getSleepHours("Saturday"));
// console.log(getSleepHours("Sunday"));

function sayHello() {
  console.log("Printing say hello!");
}

const getActualSleepHours = () => {
  let sum = 0;
  sum +=
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");
  return sum;
};

//console.log(getActualSleepHours());

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

//console.log(getIdealSleepHours());
// const sayHelloText = sayHello();

// console.log(actualSleepHours);
// console.log(idealSleepHours);

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);

  if (actualSleepHours === idealSleepHours) {
    console.log("User got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("User got more sleep than needed.");
    console.log(
      `User is ${
        actualSleepHours - idealSleepHours
      } hours over the ideal sleep hours!`
    );
  } else {
    console.log(
      `User is ${
        idealSleepHours - actualSleepHours
      } hours under the ideal sleep hours!`
    );
    console.log("User should get some rest");
  }
};

calculateSleepDebt();
