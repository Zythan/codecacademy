const team = {
    _players: [{firstname:'one',lastName:'ene',age:23},
               {firstname:'two',lastName:'owt',age:19},
               {firstname:'three',lastName:'eerht',age:36}
    ],
    _games: [{opponent:'',teamPoints:-1,opponentPoints:-1},
             {opponent:'',teamPoints:-1,opponentPoints:-1},
             {opponent:'',teamPoints:-1,opponentPoints:-1}
    ],
    get players() { return this._players },
    get games() { return this._games },
    addPlayer(firstName,lastName,age) {
       this._players.push({firstName,lastName,age})
    },
    addGame(opponent,teamPoints,opponentPoints) {
      this._games.push({opponent,teamPoints,opponentPoints})
    },

     
  }
  console.log(team.players)
  console.log(team.games)
  team.addPlayer('Bugs','Bunny',76)
  console.log(team.players)
  team.addGame('Titans',100,98)
  console.log(team.games)
