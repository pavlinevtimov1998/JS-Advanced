function argumentInfo() {
  const obj = {};

  Array.from(arguments).forEach((arg) => {
    let type = typeof arg;

    console.log(`${type}: ${arg}`);

    if (obj.hasOwnProperty(type) == false) {
      obj[type] = 0;
    }

    obj[type]++;
  });

  Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .forEach((key) => console.log(`${key} = ${obj[key]}`));
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
