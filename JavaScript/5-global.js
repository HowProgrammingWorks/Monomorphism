'use strict';

global.x = 0;

const incGlobalX = () => {
  ++x;
};

for (let i = 0; i < 1000000; i++) {
  incGlobalX();
}

console.log(x);
