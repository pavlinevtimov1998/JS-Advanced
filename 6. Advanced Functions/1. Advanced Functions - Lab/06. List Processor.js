function solution(array) {
  // let arr = [];

  // array.forEach((el) => {
  //   let [command, string] = el.split(" ");
  //   if (command == "add") {
  //     arr.push(string);
  //   } else if (command == "remove") {
  //     if (arr.includes(string)) {
  //       arr = arr.filter((x) => x !== string);
  //     }
  //   } else if (command == "print") {
  //     console.log(arr.join(","));
  //   }
  // });
  let result = [];

  function processor() {
    return {
      add: (value) => result.push(value),
      remove: (value) => {
        result = result.filter((v) => v !== value);
      },
      print: () => console.log(result.join(",")),
    };
  }

  const listProcessor = processor();

  array
    .map((x) => x.split(" "))
    .forEach(([command, value]) => listProcessor[command](value));
}

solution(["add pesho", "add george", "add peter", "remove peter", "print"]);
