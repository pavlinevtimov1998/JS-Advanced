function solve() {
  const fighter = (name) => {
    let obj = {
      name,
      health: 100,
      stamina: 100,
    };

    return Object.assign(obj, fighting(obj));
  };

  const mage = (name) => {
    let obj = {
      name,
      health: 100,
      mana: 100,
    };

    return Object.assign(obj, maging(obj));
  };

  const fighting = (obj) => ({
    fight: () => {
      console.log(`${obj.name} slashes at the foe!`);
      obj.stamina -= 1;
      return obj.stamina;
    },
  });

  const maging = (obj) => ({
    cast: (spell) => {
      console.log(`${obj.name} cast ${spell}`);
      obj.mana -= 1;
      return obj.mana;
    },
  });

  return { mage, fighter };
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
