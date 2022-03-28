function rectangle(width, height, color) {
  let char = color[0];
  color = color.replace(char, char.toUpperCase());

  let result = {
    width,
    height,
    color,
    calcArea() {
      let area = this.width * this.height;
      return area;
    },
  };

  return result;
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
