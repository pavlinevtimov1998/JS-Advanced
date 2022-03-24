function roadRadar(speed, area) {
  let motorwaySpeedLimit = 130;
  let interstatePeedLimit = 90;
  let citySpeedLimit = 50;
  let residentialSpeedLimit = 20;
  let status;

  switch (area) {
    case "motorway":
      if (speed <= motorwaySpeedLimit) {
        console.log(`Driving ${speed} km/h in a ${motorwaySpeedLimit} zone`);
      } else {
        let difference = speed - motorwaySpeedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeedLimit} - ${status}`
        );
      }
      break;
    case "interstate":
      if (speed <= interstatePeedLimit) {
        console.log(`Driving ${speed} km/h in a ${interstatePeedLimit} zone`);
      } else {
        let difference = speed - interstatePeedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${interstatePeedLimit} - ${status}`
        );
      }
      break;
    case "city":
      if (speed <= citySpeedLimit) {
        console.log(`Driving ${speed} km/h in a ${citySpeedLimit} zone`);
      } else {
        let difference = speed - citySpeedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${citySpeedLimit} - ${status}`
        );
      }

      break;
    case "residential":
      if (speed <= residentialSpeedLimit) {
        console.log(`Driving ${speed} km/h in a ${residentialSpeedLimit} zone`);
      } else {
        let difference = speed - residentialSpeedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${residentialSpeedLimit} - ${status}`
        );
      }
      break;
  }
}
roadRadar(40, "city");
console.log("--------");
roadRadar(21, "residential");
console.log("--------");
roadRadar(120, "interstate");
console.log("--------");
roadRadar(200, "motorway");
