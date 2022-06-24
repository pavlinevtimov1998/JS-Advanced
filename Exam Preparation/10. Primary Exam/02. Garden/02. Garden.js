class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      throw new Error("Not enough space in the garden.");
    }

    let obj = {
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    };

    this.spaceAvailable -= spaceRequired;

    this.plants.push(obj);

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let plant = this.plants.find((p) => p.plantName == plantName);

    if (plant == undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (plant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }
    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    this.plants.find((p) => p.plantName == plantName).ripe = true;
    this.plants.find((p) => p.plantName == plantName).quantity += quantity;
    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    }

    return `${quantity} ${plantName}s have successfully ripened.`;
  }

  harvestPlant(plantName) {
    let plant = this.plants.find((p) => p.plantName == plantName);

    if (plant == undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe == false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }
    this.spaceAvailable += plant.spaceRequired;
    let index = this.plants.indexOf(plant);
    this.plants.splice(index, 1);
    this.storage.push(plant);

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let result = [];
    result.push(`The garden has ${this.spaceAvailable} free space left.`);

    let text = "Plants in the garden: ";
    let plantsArr = [];
    this.plants
      .sort((a, b) => a.plantName.localeCompare(b.plantName))
      .forEach((p) => {
        plantsArr.push(p.plantName);
      });
    text += plantsArr.join(", ");
    result.push(text);

    if (this.storage.length == 0) {
      result.push(`Plants in storage: The storage is empty.`);
    } else {
      let text = "Plants in storage: ";
      let storageArr = [];
      this.storage.forEach((p) => {
        storageArr.push(`${p.plantName} (${p.quantity})`);
      });
      text += storageArr.join(", ");
      result.push(text);
    }

    return result.join("\n");
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("olive", 30));

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("orange", 4));

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("olive", 50));
