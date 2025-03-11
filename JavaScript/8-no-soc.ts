type AdderMapFunction = (value: number) => number;

interface Adder {
  (y?: number): number | void;
  map: (fn: AdderMapFunction) => Adder;
  set: (a: number) => void;
}

const adder = (x: number): Adder => {
  const f = (y?: number): number | void => {
    if (y !== undefined) x += y;
    else return x;
  };

  f.map = (fn: AdderMapFunction): Adder => adder(fn(x));
  f.set = (a: number): void => {
    x = a;
  };

  return f as Adder;
};
