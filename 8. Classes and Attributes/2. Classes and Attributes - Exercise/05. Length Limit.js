class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  toString() {
    if (this.innerString.length > this.innerLength) {
      let resultString = this.innerString.slice(0, this.innerLength) + "...";
      return resultString;
    } else {
      return this.innerString;
    }
  }

  decrease(length) {
    if (this.innerLength - length >= 0) {
      this.innerLength -= length;
    } else {
      this.innerLength = 0;
    }
  }

  increase(length) {
    this.innerLength += length;
  }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
