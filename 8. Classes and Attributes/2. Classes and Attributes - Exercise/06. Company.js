class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    [name, salary, position, department].forEach((el) => {
      if (el == "" || el == undefined || el == null || salary <= 0) {
        throw new Error("Invalid input!");
      }
    });

    if (this.departments.hasOwnProperty(department) == false) {
      this.departments[department] = {
        [name]: { salary: salary, position: position },
      };
    } else {
      this.departments[department][name] = {
        salary: salary,
        position: position,
      };
    }

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let avgSalary = 0;
    let theBestDepartment;

    Object.entries(this.departments).forEach((el) => {
      let sum = 0;
      let employeeCounter = 0;

      for (let [_, info] of Object.entries(el[1])) {
        employeeCounter++;
        sum += info["salary"];
      }

      sum /= employeeCounter;

      if (sum > avgSalary) {
        avgSalary = sum;
        theBestDepartment = el[0];
      }
    });

    let employees = Object.entries(this.departments[theBestDepartment]).sort(
      (a, b) => {
        if (b[1]["salary"] == a[1]["salary"]) {
          return a[0].localeCompare(b[0]);
        } else {
          return b[1]["salary"] - a[1]["salary"];
        }
      }
    );
    let output = `Best Department is: ${theBestDepartment}\nAverage salary: ${avgSalary.toFixed(
      2
    )}\n`;

    for (let [name, info] of employees) {
      output += `${name} ${info["salary"]} ${info["position"]}\n`;
    }

    return output.trim();
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
