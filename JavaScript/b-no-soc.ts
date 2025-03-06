type AdderMapFunction = (value: number) => number;

class Adder {
  #value: number;

  constructor(initial: number) {
    this.#value = initial;
  }

  addOrGet(delta?: number): number | void {
    if (delta !== undefined) this.#value += delta;
    else return this.#value;
  }

  map(fn: AdderMapFunction): number {
    return fn(this.#value);
  }

  set(value: number): void {
    this.#value = value;
  }
}
