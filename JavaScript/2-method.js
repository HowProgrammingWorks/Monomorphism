'use strict';

const stringify = obj => obj.toString();

console.log(stringify(10));
console.log(stringify('ten'));
console.log(stringify(false));

{
  const point = {
    x: 10,
    y: 20,
    toString() {
      return [this.x, this.y];
    }
  };

  console.log(stringify(point));
}

{
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    toString() {
      return [this.x, this.y];
    }
  }

  const point = new Point(30, 40);
  console.log(stringify(point));
}
