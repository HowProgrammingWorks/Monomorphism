'use strict';

const sum = (a, b) => a + b;

for (let i = 0; i < 1000000; i++) {
  sum(i, i);
  sum(i, i / 3);
  sum('a', i);
  sum('a', 'b');
  sum({}, 'a');
  sum({}, i);
  sum({}, i / 2);
  sum(false, i);
  sum(false, 'a');
  sum(false, {});
  sum(false, 2 / 3);
}

//sum(1, 'a');
