//Advanced objects

// *** The this Keyword
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(this.dietType);
  },
};

goat.makeSound();
goat.diet();

//* 1)
// Let’s create a new object to practice using this.

// In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};

//*2 Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation:
//I am MODEL and my current energy level is ENERGYLEVEL.
console.log(robot.provideInfo());

//*** Arrow Functions and this

const goat2 = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  //   diet: () => {
  //     console.log(this.dietType);
  //   },

  //refactored- to work
  diet() {
    console.log(this.dietType);
  },
};

goat2.diet(); // Prints undefined

const robot2 = {
  energyLevel: 100,
  //     checkEnergy: () => {
  //     console.log(`Energy is currently at ${this.energyLevel}%.`);
  //   }

  //old way - declaring a function
  //   checkEnergy: function () {
  //     console.log(`Energy is currently at ${this.energyLevel}%.`);
  //   },

  // refactored to work, new way
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot2.checkEnergy();

const bankAccount = {
  _amount: 1000,
};

console.log(bankAccount._amount);
bankAccount._amount = 1000000;
console.log(bankAccount._amount);

const robot3 = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robot3.recharge();

robot3._energyLevel = "high";
robot3.recharge();

// ***  Getters

const person = {
  _firstName: "John",
  _lastName: "Doe",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing a first name or a last name.";
    }
  },
};

// To call the getter method:
person.fullName; // 'John Doe'

const robot4 = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robot4.energyLevel);

//*** Setters

const robot5 = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

robot5.numOfSensors = 100;
console.log(robot5.numOfSensors);

//*** Factory Functions

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    },
  };
};

const ghost = monsterFactory("Ghost", 251, "ectoplasm", "BOO!");
ghost.scare();

function robotFactory(model, mobile) {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
}

function robotFactory(model, mobile) {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
}

const tinCan = robotFactory("P-500", true);
tinCan.beep();

//*** Property Value Shorthand

const robotFactory2 = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

// To check that the property value shorthand technique worked:
const newRobot = robotFactory2("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);

const vampire = {
  name: "Dracula",
  residence: "Transylvania",
  preferences: {
    day: "stay inside",
    night: "satisfy appetite",
  },
};

// const residence = vampire.residence;
// console.log(residence);
const { residence } = vampire;
console.log(residence);
// const day = vampire.preferences.day;
// console.log(day);

const { day } = vampire.preferences;
console.log(day);

//Task

const robot6 = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};

const { functionality } = robot6;
functionality.beep();
functionality.fireLaser();

// Built-in Object Methods
const robot7 = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot7);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot7);
console.log(robotEntries);

// Declare newRobot below this line:
const target = robot;
const source = { laserBlaster: true, voiceRecognition: true };

const newRobot2 = Object.assign(source, robot);
console.log(newRobot2);

// If you want to challenge yourself:

// Find the value of this in a function inside of a method.
// Learn the outcome of using a property that has the exact same name as a setter/getter method.
// Create a new factory function that can create object instances of your choice.
// Read documentation on other destructuring techniques and apply it to your code.
// Try out other built-in object methods and learn what they do.
