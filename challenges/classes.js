// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor (info) {
    this.length = info.length;
    this.width = info.width;
    this.height = info.height;
  }

  volume() {
    return (this.length * this.width * this.height);
  }

  surfaceArea() {
    return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
  }
}
// Object of CuboidMaker......
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor (info) {
    super(info);
  }

  volume() {
    return super.volume();
  }

  surfaceArea() {
    return (6 * (this.length * this.width));
  }
}
// Object of CubeMaker......
const cube = new CubeMaker({ // length === width === height
  length: 5,
  width: 5,
  height: 5,
});

console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150