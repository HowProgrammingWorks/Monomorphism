'use strict';

const getX = obj => obj.x;

console.log(getX({ x: 10 }));        // { x: number }
console.log(getX({ x: 70 }));        // { x: number }
console.log(getX({ x: 10, y: 20 })); // { x: number, y: number }
console.log(getX({ y: 20, x: 10 })); // { y: number, x: number }

class Point {
  constructor(x, y) { // {}
    this.x = x;       // { x: number }
    this.y = y;       // { x: number, y: number }
  }
}

console.log(getX(new Point(10, 20)));

console.log(getX({ x: 10, y: 20, z: 30 }));
// { x: number, y: number, z: number }

{
  const point = { x: 10, y: 20, z: 30 };
  // { x: number, y: number, z: number }
  delete point.z;
  // { x: number, y: number }
  console.log(getX(point));
}
