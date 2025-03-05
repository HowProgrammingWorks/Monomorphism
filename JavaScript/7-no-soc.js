'use strict';

const adder = (x) => {
  const f = (y) => {
    if (y) x += y;
    else return x;
  };
  f.map = (fn) => fn(x);
  f.set = (a) => {
    x = a;
  };
  return f;
};

// Usage

const counter = adder(10);
console.log({ step1: counter() });
counter(5);
console.log({ step2: counter() });
const twice = (a) => a * 2;
const value = counter.map(twice);
console.log({ value });
console.log({ step3: counter() });
counter.set(50);
console.log({ step4: counter() });
