function carFactory(obj) {
  let result = {};
  let smallEngine = { power: 90, volume: 1800 };
  let normalEngine = { power: 120, volume: 2400 };
  let monsterEngine = { power: 200, volume: 3500 };

  result["model"] = obj.model;

  if (obj.power <= 90) {
    result["engine"] = smallEngine;
  } else if (obj.power > 90 && obj.power <= 120) {
    result["engine"] = normalEngine;
  } else if (obj.power > 120 && obj.power <= 200) {
    result["engine"] = monsterEngine;
  }

  if (obj.carriage == "hatchback") {
    result["carriage"] = { type: "hatchback", color: obj.color };
  } else if (obj.carriage == "coupe") {
    result["carriage"] = { type: "coupe", color: obj.color };
  }

  let wheelsArray = [];
  if (obj.wheelsize % 2 == 0) {
    obj.wheelsize -= 1;
  }

  for (let i = 0; i < 4; i++) {
    wheelsArray.push(obj.wheelsize);
  }

  result["wheels"] = wheelsArray;

  return result;
}
carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
console.log("--------");
carFactory({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});
