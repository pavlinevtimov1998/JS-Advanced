function townPopulation(array) {
  let obj = {};

  for (let tokens of array) {
    let [town, population] = tokens.split(" <-> ");
    population = Number(population);
    if (obj.hasOwnProperty(town) == false) {
      obj[town] = population;
    } else {
      obj[town] += population;
    }
  }

  for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
console.log("---------");
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
