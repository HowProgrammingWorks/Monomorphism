'use strict';

// TODO: Refactor to monomorphic code
// and optimize JavaScript for V8

const adder = (x) => {
  const f = (y) => {
    // Use SOLID/SRP
    if (y)
      x += y; // Rewrite without if statement
    else return x; // Fix: consistent-return
  };
  f.map = (fn) => adder(fn(x)); // Do not use mix-ins
  f.set = (a) => {
    // Improve naming
    x = a; // Do not change incoming parameters
  };
  return f;
};

// Usage

const counter = adder(10);
console.log({ step1: counter() });
counter(5);
console.log({ step2: counter() });
const twice = (a) => a * 2;
const counter2 = counter.map(twice);
console.log({ counter2: counter2() });
console.log({ step3: counter() });
counter.set(50);
console.log({ step4: counter() });
