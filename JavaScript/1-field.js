'use strict';

const getX = obj => obj.x;

console.log(getX({ x: 10 }));
console.log(getX({ x: 70 }));
console.log(getX({ x: 10, y: 20 }));

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

console.log(getX(new Point(10, 20)));

console.log(getX({ x: 10, y: 20, z: 30 }));

{
  const point = { x: 10, y: 20, z: 30 };
  delete point.z;
  console.log(getX(point));
}
