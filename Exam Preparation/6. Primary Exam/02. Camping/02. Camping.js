class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (this.priceForTheCamp.hasOwnProperty(condition) == false) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    if (this.listOfParticipants.find((n) => n.name === name)) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }

    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });

    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    if (this.listOfParticipants.find((n) => n.name === name) == undefined) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    let index = this.listOfParticipants.indexOf(
      this.listOfParticipants.find((n) => n.name === name)
    );
    this.listOfParticipants.splice(index, 1);

    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    if (typeOfGame == "Battleship") {
      if (
        this.listOfParticipants.find((n) => n.name === participant1) ==
        undefined
      ) {
        throw new Error(`Invalid entered name/s.`);
      }

      this.listOfParticipants.find((n) => n.name === participant1).power += 20;

      return `The ${participant1} successfully completed the game ${typeOfGame}.`;
    }

    if (typeOfGame == "WaterBalloonFights") {
      if (
        this.listOfParticipants.find((n) => n.name === participant1) ==
          undefined ||
        this.listOfParticipants.find((n) => n.name === participant2) ==
          undefined
      ) {
        throw new Error(`Invalid entered name/s.`);
      }

      if (
        this.listOfParticipants.find((n) => n.name === participant1)
          .condition ===
        this.listOfParticipants.find((n) => n.name === participant2).condition
      ) {
        if (
          this.listOfParticipants.find((n) => n.name === participant1).power >
          this.listOfParticipants.find((n) => n.name === participant2).power
        ) {
          this.listOfParticipants.find((n) => n.name === participant1).wins++;
          return `The ${participant1} is winner in the game ${typeOfGame}.`;
        } else if (
          this.listOfParticipants.find((n) => n.name === participant1).power <
          this.listOfParticipants.find((n) => n.name === participant2).power
        ) {
          this.listOfParticipants.find((n) => n.name === participant2).wins++;
          return `The ${participant2} is winner in the game ${typeOfGame}.`;
        } else {
          return `There is no winner.`;
        }
      } else {
        throw new Error(`Choose players with equal condition.`);
      }
    }
  }

  toString() {
    let result = [];

    result.push(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );

    let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

    for (let el of sorted) {
      result.push(`${el.name} - ${el.condition} - ${el.power} - ${el.wins}`);
    }

    return result.join("\n");
  }
}

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);

let camp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");

console.log(camp.registerParticipant("Petar Petarson", "child", 300));
console.log(camp.registerParticipant("Sara Dickinson", "child", 200));
console.log(camp.timeToPlay("Battleship", "Sara Dickinson"));
console.log(
  camp.timeToPlay("WaterBalloonFights", "Sara Dickinson", "Petar Petarson")
);
console.log(camp.toString());
