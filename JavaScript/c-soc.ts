type AdderMapFunction = (value: number) => number;

class Adder {
  #value: number;

  constructor(initial: number = 0) {
    this.#value = initial;
  }

  add(delta: number): void {
    this.#value += delta;
  }

  get(): number {
    return this.#value;
  }

  map(fn: AdderMapFunction):Adder {
    return new Adder(fn(this.#value));
  }

  set(value: number): void {
    this.#value = value;
  }
}
