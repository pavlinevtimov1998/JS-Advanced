function cityTaxes(city, population, treasury) {
  let obj = {
    name: city,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury = this.treasury + this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      percentage /= 100;
      this.population = this.population + this.population * percentage;
    },
    applyRecession(percentage) {
      percentage /= 100;
      this.treasury = this.treasury - this.treasury * percentage;
    },
  };

  return obj;
}

const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
