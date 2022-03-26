function cityRecord(city, population, treasury) {
  let obj = {
    name: city,
    population: population,
    treasury: treasury,
  };

  return obj;
}
cityRecord("Tortuga", 7000, 15000);
console.log("--------");
cityRecord("Santo Domingo", 12000, 23500);
