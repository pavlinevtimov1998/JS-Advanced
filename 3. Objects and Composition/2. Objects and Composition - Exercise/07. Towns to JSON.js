function townsToJson(array) {
  let arr = [];

  for (let i = 1; i < array.length; i++) {
    let [_, town, latitude, longitude] = array[i].split("|");
    town = town.trim();
    latitude = Number(latitude).toFixed(2).trim();
    longitude = Number(longitude).toFixed(2).trim();
    let obj = {
      Town: town,
      Latitude: parseFloat(latitude),
      Longitude: parseFloat(longitude),
    };

    arr.push(obj);
  }

  console.log(JSON.stringify(arr));
}
townsToJson([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
console.log("----------");
townsToJson([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
