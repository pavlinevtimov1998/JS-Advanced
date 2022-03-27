function heroicInventory(array) {
  let result = [];

  for (let el of array) {
    let [heroName, heroLevel, items] = el.split(" / ");
    items = items ? items.split(", ") : [];
    let obj = {};
    obj["name"] = heroName;
    obj["level"] = Number(heroLevel);
    obj["items"] = items;
    result.push(obj);
  }

  console.log(JSON.stringify(result));
}
heroicInventory([
  "Isacc / 25 /",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
console.log("-------");
heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
