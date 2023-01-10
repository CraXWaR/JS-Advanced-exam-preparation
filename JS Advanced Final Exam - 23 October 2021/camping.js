class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (condition != 'child' && condition != 'student' && condition != 'collegian') {
            throw Error("Unsuccessful registration at the camp.");
        };

        if (this.listOfParticipants.find(p => p.name == name) != undefined) {
            return `The ${name} is already registered at the camp.`;
        };
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });
        return `The ${name} was successfully registered.`;
    };

    unregisterParticipant(name) {
        let foundPlayerIndex = this.listOfParticipants.findIndex(p => p.name == name);
        if (foundPlayerIndex == -1) {
            throw Error(`The ${name} is not registered in the camp.`);
        };

        this.listOfParticipants.splice(foundPlayerIndex, 1);
        return `The ${name} removed successfully.`;
    };

    timeToPlay(typeOfGame, participant1, participant2) {
        let findPlayer1 = this.listOfParticipants.find(p => p.name == participant1);
        let findPlayer2 = this.listOfParticipants.find(p => p.name == participant2);

        if (typeOfGame == 'WaterBalloonFights') {

            if (findPlayer1 == undefined || findPlayer2 == undefined) {
                throw Error(`Invalid entered name/s.`);
            };
            if (findPlayer1.condition != findPlayer2.condition) {
                throw Error(`Choose players with equal condition.`);
            };
            if (findPlayer1.power > findPlayer2.power) {
                findPlayer1.wins++;
                return `The ${findPlayer1.name} is winner in the game ${typeOfGame}.`
            } else if (findPlayer1.power < findPlayer2.power) {
                findPlayer2.wins++;
                return `The ${findPlayer2.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            };

        } else if (typeOfGame == 'Battleship') {

            if (findPlayer1 == undefined) {
                throw Error(`Invalid entered name/s.`);
            };
            findPlayer1.power += 20;
            return `The ${findPlayer1.name} successfully completed the game ${typeOfGame}.`;
        };
    };

    toString() {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        for (const player of sorted) {
            result.push(`${player.name} - ${player.condition} - ${player.power} - ${player.wins}`);
        }
        return result.join('\n');
    }
};
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

