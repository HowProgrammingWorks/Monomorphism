'use strict';

global.x = 0;

const main = () => {
  const incGlobalX = () => {
    ++x;
  };

  for (let i = 0; i < 1000000; i++) {
    incGlobalX();
  }
};

main();
console.log(x);
