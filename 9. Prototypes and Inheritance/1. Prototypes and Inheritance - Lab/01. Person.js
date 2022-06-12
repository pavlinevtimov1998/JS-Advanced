function Person(firstName, lastName) {
  let result = {
    firstName,
    lastName,
    fullName: "",
  };

  Object.defineProperty(result, "fullName", {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },

    set(value) {
      let name = value.split(" ");
      if (name[0] != undefined && name[1] != undefined) {
        this.firstName = name[0];
        this.lastName = name[1];
      }
    },
  });

  return result;
}

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName); // Simon
console.log(person.lastName); // Simpson
