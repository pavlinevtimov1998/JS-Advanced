function classHierarchy() {
  class Figure {
    constructor() {
      this.units = "cm";
    }

    get area() {}

    changeUnits(units) {
      this.units = units;
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }
  class Circle extends Figure {
    constructor(radius, units) {
      super(units);
      this.radius = radius;
    }

    get area() {
      let radius;
      if (this.units == "mm") {
        radius = this.radius * 10;
        return Math.PI * radius * radius;
      } else if (this.units == "m") {
        radius = this.radius / 100;
        return Math.PI * radius * radius;
      } else {
        return Math.PI * this.radius * this.radius;
      }
    }

    toString() {
      let baseStr = super.toString();
      let radius;
      if (this.units == "mm") {
        radius = this.radius * 10;
      } else if (this.units == "m") {
        radius = this.radius / 100;
      } else {
        radius = this.radius;
      }
      return `${baseStr} Area: ${this.area} - radius: ${radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this.width = width;
      this.height = height;
      this.units = units;
    }

    get area() {
      let width;
      let height;

      if (this.units == "mm") {
        width = this.width * 10;
        height = this.height * 10;
        return width * height;
      } else if (this.units == "m") {
        width = this.width /= 100;
        height = this.height /= 100;
        return width * height;
      } else {
        return this.width * this.height;
      }
    }

    toString() {
      let baseStr = super.toString();
      let width;
      let height;
      if (this.units == "mm") {
        width = this.width * 10;
        height = this.height * 10;
      } else if (this.units == "m") {
        width = this.width /= 100;
        height = this.height /= 100;
      } else {
        width = this.width;
        height = this.height;
      }
      return `${baseStr} Area: ${this.area} - width: ${width}, height: ${height}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}
