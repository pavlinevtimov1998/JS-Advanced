class Bank {
  constructor(bankName) {
    this._bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    if (
      this.allCustomers.find(
        (c) =>
          c.firstName === customer.firstName &&
          c.lastName === customer.lastName &&
          c.personalId === customer.personalId
      )
    ) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} is already our customer!`
      );
    }

    customer["transactions"] = new Map();
    customer["countOfTransactions"] = 0;

    this.allCustomers.push(customer);

    return {
      firstName: customer.firstName,
      lastName: customer.lastName,
      personalId: customer.personalId,
    };
  }

  depositMoney(personalId, amount) {
    if (
      this.allCustomers.find((c) => c.personalId == personalId) == undefined
    ) {
      throw new Error(`We have no customer with this ID!
            `);
    }

    let money;

    this.allCustomers.forEach((c) => {
      if (c.personalId === personalId) {
        if (c.hasOwnProperty("totalMoney") == false) {
          c["totalMoney"] = amount;
          c["countOfTransactions"]++;
          c["transactions"].set(c["countOfTransactions"], [
            `${c.firstName} ${c.lastName} made deposit of ${amount}$!`,
          ]);
          money = c["totalMoney"];
        } else {
          c["totalMoney"] += amount;
          c["countOfTransactions"]++;
          c["transactions"].set(c["countOfTransactions"], [
            `${c.firstName} ${c.lastName} made deposit of ${amount}$!`,
          ]);
          money = c["totalMoney"];
        }
      }
    });

    return `${money}$`;
  }

  withdrawMoney(personalId, amount) {
    if (
      this.allCustomers.find((c) => c.personalId == personalId) == undefined
    ) {
      throw new Error(`We have no customer with this ID!
                  `);
    }

    let person = this.allCustomers.find((c) => c.personalId == personalId);

    if (amount > person.totalMoney) {
      throw new Error(
        `${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`
      );
    }

    let subtract;
    let total;

    this.allCustomers.forEach((c) => {
      if (c.personalId == personalId) {
        subtract = c["totalMoney"] - amount;
        c["totalMoney"] -= amount;
        c["countOfTransactions"]++;
        c["transactions"].set(
          c["countOfTransactions"],
          `${c.firstName} ${c.lastName} withdrew ${amount}$!`
        );
        total = `${c["totalMoney"]}$`;
      }
    });

    return total;
  }

  customerInfo(personalId) {
    if (
      this.allCustomers.find((c) => c.personalId == personalId) == undefined
    ) {
      throw new Error(`We have no customer with this ID!
                    `);
    }

    let result = [];

    this.allCustomers.forEach((c) => {
      if (c.personalId == personalId) {
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${c.firstName} ${c.lastName}`);
        result.push(`Customer ID: ${personalId}`);
        result.push(`Total Money: ${c["totalMoney"]}$`);
        if (c["transactions"].size > 0) {
          result.push("Transactions:");
          for (let i = c["transactions"].size; i > 0; i--) {
            result.push(`${i}. ${c["transactions"].get(i)}`);
          }
        }
      }
    });

    return result.join("\n");
  }
}

let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596,
  })
);

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 501));

// console.log(bank.customerInfo(6233267));

// throlin error
// console.log(
//     bank.newCustomer({
//       firstName: "Mihaela",
//       lastName: "Mileva",
//       personalId: 4151596,
//     })
//   );
