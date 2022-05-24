function solution() {
  let string = "";

  return {
    append(str) {
      string += str;
    },
    removeStart(n) {
      string = string.slice(n);
    },
    removeEnd(n) {
      string = string.slice(0, -n);
    },
    print() {
      console.log(string);
    },
  };
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
