function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const input = JSON.parse(document.querySelector("#inputs textarea").value);

    const obj = {};

    for (let el of input) {
      let [restaurant, workers] = el.split(" - ");
      workers = workers.split(", ");

      let avgSalary = 0;

      for (const info of workers) {
        let [worker, salary] = info.split(" ");
        salary = Number(salary);

        avgSalary += salary;
        if (obj.hasOwnProperty(restaurant) == false) {
          obj[restaurant] = {
            [worker]: salary,
            averageSalary: 0,
          };
        } else {
          obj[restaurant][worker] = salary;
        }
      }

      avgSalary /= workers.length;

      obj[restaurant]["averageSalary"] += avgSalary;
    }

    let bestRestaurant = [];
    let bestAvg = -1;

    for (const key in obj) {
      let bestSalary = 0;
      if (obj[key]["averageSalary"] > bestAvg) {
        bestAvg = obj[key]["averageSalary"];
        delete obj[key]["averageSalary"];
        for (const insideKey in obj[key]) {
          if (obj[key][insideKey] > bestSalary) {
            bestSalary = obj[key][insideKey];
          }
        }
        bestRestaurant = [key, bestAvg, bestSalary];
      }
    }

    let bestView = document.querySelector("#bestRestaurant p");
    //  let text = document.createTextNode(
    //    `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].toFixed(
    //      2
    //    )} Best Salary: ${bestRestaurant[2].toFixed(2)}`
    //  );
    bestView.textContent = `Name: ${
      bestRestaurant[0]
    } Average Salary: ${(bestRestaurant[1]).toFixed(
      2
    )} Best Salary: ${(bestRestaurant[2]).toFixed(2)}`;

    let sortWorkers = Object.entries(obj[bestRestaurant[0]]).sort(
      (a, b) => b[1] - a[1]
    );

    let output = "";

    for (let el of sortWorkers) {
      let string = `Name: ${el[0]} With Salary: ${el[1]} `;
      output += string;
    }

    let workersOutput = document.querySelector("#workers p");
    //  let workersText = document.createTextNode(output);
    workersOutput.textContent = output;
  }
}


// function onClick() {
//    let arr = JSON.parse(document.querySelector('#inputs textarea').value);
//    let objWinner = findBestRestaurant(arr);
//    document.querySelector('#bestRestaurant>p').textContent = getMsgRest(objWinner);
//    document.querySelector('#workers>p').textContent = getMsgEmp(objWinner.workers);
// }

// function getMsgRest(objWinner) {
//    return `Name: ${objWinner.name} Average Salary: ${objWinner.avgSalary.toFixed(2)} Best Salary: ${objWinner.maxSalary.toFixed(2)}`;
// }

// function getMsgEmp(workers) {
//    return workers.map(w => `Name: ${w.worker} With Salary: ${w.salary}`).join(' ');
// }

// function findBestRestaurant(arr) {
//    let resultRestaurants = arr.reduce((acc, e) => {
//        let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
//        workers = workers.map(w => {
//            let [worker, salary] = w.split(' ');
//            return {
//                worker: worker,
//                salary: +salary
//            };
//        });
//        let foundRestraunt = acc.find(r => r.name === restaurant);
//        if (foundRestraunt) {
//            foundRestraunt.workers = foundRestraunt.workers.concat(workers);
//        } else {
//            acc.push({
//                name: restaurant,
//                workers: workers
//            });
//        }
//        return acc;
//    }, []);

//    resultRestaurants.forEach((el, idx) => {
//        el.inputOrder = idx;
//        el.avgSalary = el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
//        el.maxSalary = Math.max(...el.workers.map(w => w.salary));
//    });

//    resultRestaurants.sort((a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder);
//    let bestRestaurant = resultRestaurants[0];
//    bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

//    return bestRestaurant;
// }