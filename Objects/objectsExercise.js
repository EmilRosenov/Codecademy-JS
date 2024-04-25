let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  color: "silver",
  homePlanet: "Earth",
  color: "silver",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

console.log(spaceship["Fuel Type"]);
console.log(spaceship.color);

let fasterShip = {
  "Fuel Type": "Turbo Fuel",
  color: "silver",
};

let planetToObserve = spaceship.homePlanet;
console.log(planetToObserve);

spaceship.favoriteIceCream; // Returns undefined
console.log(spaceship.favoriteIceCream);

let crewCount = spaceship.numCrew;
console.log(crewCount);
let path = spaceship.flightPath;
console.log(path);
let planetArray = spaceship.flightPath;
console.log(planetArray);

// ==========Bracket Notation===================

console.log(spaceship["Active Mission"]);
console.log(spaceship["Fuel Type"]);
console.log(spaceship.numCrew);
console.log("and in a diff way");
console.log(spaceship["numCrew"]);
console.log(spaceship.homePlanet);
console.log(spaceship.color);
console.log(spaceship["!!!!!"]);

let returnAnyObjectProp = (object, propName) => object[propName];

console.log(returnAnyObjectProp(spaceship, "Fuel Type"));
console.log(returnAnyObjectProp(spaceship, "numCrew"));

let propName = "Active Mission";

// Write your code below
let isActive = spaceship["Active Mission"];
console.log(isActive);
console.log(spaceship[propName]);

//===========Property Assignment===================
spaceship["Active Mission"] = false;
console.log(spaceship["Active Mission"]);
spaceship.numCrew = 12;
console.log(`changed the number of crew to ${spaceship.numCrew}`);

spaceship.type = "shuttle";
spaceship.type = "alien"; // Changes the value of the type property
spaceship.speed = "Mach 5"; // Creates a new key of 'speed' with a value of 'Mach 5'

spaceship.mission = "Explore the universe";
console.log(spaceship.mission);
console.log("Before using the delete:spaceship.numCrew", spaceship.numCrew);

delete spaceship.numCrew; //removes the numCrew property
console.log("Used the delete for spaceship.numCrew", spaceship.numCrew);

console.log(spaceship.type);
console.log(spaceship.speed);

// Reassign the color property of the spaceship object to have a value of 'glorious gold'
spaceship.color = "glorious gold";

// Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
spaceship.numEngines = 4;

// Use the delete operator to remove the 'Secret Mission' property from the spaceship object.
delete spaceship["Active Mission"];
console.log(spaceship["Active Mission"]);

//=============Methods=====================

// const alienShip = {
//   invade: function () {
//     console.log(
//       "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon."
//     );
//   },
// };

// alienShip.invade();

//new method syntax ==== ES6 ===
const alienShip = {
  shoot() {
    console.log("We open fire against you!");
  },
  name: "StarShip",
  invade() {
    console.log("We will invade Earth!");
  },
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

console.log(`${alienShip.name} speaking!!!`);
alienShip.invade();
alienShip.shoot();

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

alienShip.retreat();
alienShip.takeOff();

//================Nested Objects=====================
let spaceship2 = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoElectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

console.log(spaceship2.crew.captain.name);
console.log(spaceship2.nanoElectronics["back-up"].terabytes);

let capFave = spaceship2.crew.captain["favorite foods"][0];
console.log(capFave);

//============Pass By Reference====================
const spaceship3 = {
  homePlanet: "Earth",
  color: "silver",
};

let paintIt = (obj) => {
  obj.color = "glorious gold";
};
// console.log(paintIt(spaceship3));
paintIt(spaceship3);
console.log(spaceship3.color);

let tryReassignment = (obj) => {
  obj = {
    identified: false,
    "transport type": "flying",
  };
  console.log(obj); // Prints {'identified': false, 'transport type': 'flying'}
};
tryReassignment(spaceship3); // The attempt at reassignment does not work.
spaceship3; // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
  identified: false,
  "transport type": "flying",
}; // Regular reassignment still work

//1).
// Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.

let myShip = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  disabled: false,
};

let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

greenEnergy(myShip);
console.log(myShip["Fuel Type"]);

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

remotelyDisable(myShip);
console.log(myShip.disabled);

//==============Looping Through Objects==============

let team = {
  members: {
    captain: {
      name: "Emil",
      degree: "Computer Engineering",
      position: "midfield",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "goal keeper": {
      name: "Dimitar",
      degree: "Ethnology",
      position: "GK",
      agree() {
        console.log("I agree, captain!");
      },
    },
    defender: {
      name: "Svetoslav",
      degree: "Maths",
      position: "defence",
      announce() {
        console.log(`Jets on!`);
      },
    },
    midfielder: {
      name: "Vichev",
      degree: "Conservation Ship Science",
      position: "midfield",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
    striker: {
      name: "Kofe-Babone",
      degree: "Maths",
      position: "Attack",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// for...in
for (let person in team.members) {
  console.log(`${person}: ${team.members[person].name}`);
}

let spaceship4 = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

for (let role in spaceship4.crew) {
  console.log(`${role}: ${spaceship4.crew[role].name}`);
}

for (const position in spaceship4.crew) {
  console.log(
    `${spaceship4.crew[position].name}: ${spaceship4.crew[position].degree}`
  );
}

for (const player in team.members) {
  console.log(
    `${team.members[player].name} : position is ${team.members[player].position}`
  );
}
