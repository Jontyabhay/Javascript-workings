const team = 
{
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Akshay',
            lastName: 'Mishra',
            age: 26
        },
        {
            firstName: 'Abhay',
            lastName: 'Mishra',
            age: 24
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Tarun',
            teamPoints: 35,
            opponentPoints: 43
        },
        {
            opponent: 'Rajat',
            teamPoints: 45,
            opponentPoints: 56
        }
    ],
    get games()
    {
        return this._games;
    },
    get players()
    {
        return this._players;
    },
    addPlayer(firstName,lastName,age)
    {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this._players.push(player);
    },
    addGame(opponent,teamPoints,opponentPoints)
    {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this._games.push(game);
    }
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
console.log(team._players);

team.addGame('Titans',100,98);
team.addGame('Devils',34,78);
console.log(team._games);