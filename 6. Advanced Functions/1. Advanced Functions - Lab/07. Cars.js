function cars(array) {
  let obj = {};

  const result = closure();

  for (let el of array) {
    if (el.includes("create") && el.includes("inherit") == false) {
      let [command, name] = el.split(" ");
      result[command](name);
    } else if (el.includes("inherit")) {
      let [_, name, command, parent] = el.split(" ");
      result[command](name, parent);
    } else if (el.includes("set")) {
      let [command, name, key, value] = el.split(" ");
      result[command](name, key, value);
    } else if (el.includes("print")) {
      let [command, name] = el.split(" ");
      result[command](name);
    }
  }

  function closure() {
    return {
      create: (name) => {
        obj[name] = {};
      },
      inherit: (name, parent) => {
        obj[name] = Object.create(obj[parent]);
      },
      set: (name, key, value) => {
        obj[name][key] = value;
      },
      print: (name) => {
        let result = [];

        for (let key in obj[name]) {
          result.push(`${key}:${obj[name][key]}`);
        }
        console.log(result.join(","));
      },
    };
  }
}

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
