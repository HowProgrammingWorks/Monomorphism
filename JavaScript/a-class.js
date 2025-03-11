'use strict';

class Adder {
  #value = 0;

  constructor(initial) {
    this.#value = initial;
  }

  add(delta) {
    this.#value += delta;
  }

  get() {
    return this.#value;
  }

  map(fn) {
    return new Adder(fn(this.#value));
  }

  set(x) {
    this.#value = x;
  }
}

// Usage

const counter = new Adder(10);
console.log({ step1: counter.get() });
counter.add(5);
console.log({ step2: counter.get() });
const twice = (a) => a * 2;
const counter2 = counter.map(twice);
console.log({ counter2: counter2.get() });
console.log({ step3: counter.get() });
counter.set(50);
console.log({ step4: counter.get() });
