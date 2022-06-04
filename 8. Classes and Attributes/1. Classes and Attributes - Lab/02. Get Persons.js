function getPersons() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }

    toString() {
      let output = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
      return output;
    }
  }

  let firstPerson = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
  let secondPerson = new Person("SoftUni");
  let thirdPerson = new Person("Stephan", "Johnson", 25);
  let fourthPerson = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");

  let arr = [firstPerson, secondPerson, thirdPerson, fourthPerson];

  return arr;
}
console.log(getPersons());
