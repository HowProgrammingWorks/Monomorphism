'use strict';

const adder = (initial) => {
  let value = initial;
  const add = (delta) => {
    value += delta;
  };
  const get = () => value;
  const map = (fn) => adder(fn(value));
  const set = (x) => {
    value = x;
  };
  return { add, get, map, set };
};

// Usage

const counter = adder(10);
console.log({ step1: counter.get() });
counter.add(5);
console.log({ step2: counter.get() });
const twice = (a) => a * 2;
const counter2 = counter.map(twice);
console.log({ counter2: counter2.get() });
console.log({ step3: counter.get() });
counter.set(50);
console.log({ step4: counter.get() });
