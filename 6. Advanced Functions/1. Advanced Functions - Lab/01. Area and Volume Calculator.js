/**
 *
 * @param {function} area
 * @param {function} vol
 * @param {string} input
 */

function solve(area, vol, input) {
  input = JSON.parse(input);

  let output = [];

  for (let el of input) {
    let cubeArea = area.apply(el);
    let cubeVolume = vol.apply(el);

    output.push({
      area: cubeArea,
      volume: cubeVolume,
    });
  }

  return output;
}

solve(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}
