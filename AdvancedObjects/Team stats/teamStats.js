const team = {
  _players: [
    {
      position: "defender",
      firstName: "Svetoslav",
      lastName: "Syarov",
      age: 35,
    },
    {
      position: "midfielder",
      firstName: "Ivan",
      lastName: "Vichev",
      age: 37,
    },
    {
      position: "attacker",
      firstName: "Ivan",
      lastName: "Ivanov",
      age: 36,
    },
  ],
  _games: [
    {
      opponent: "Shumen",
      teamPoints: 3,
      opponentPoints: 0,
    },
    {
      opponent: "Cherno more Varna",
      teamPoints: 1,
      opponentPoints: 1,
    },
    {
      opponent: "Dunav Ruse",
      teamPoints: 3,
      opponentPoints: 0,
    },
  ],

  get players() {
    if (players) {
      return this._players;
    }
  },

  get games() {
    if (games) {
      return this._games;
    }
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);
console.log(team._players);
console.log(team._games);
