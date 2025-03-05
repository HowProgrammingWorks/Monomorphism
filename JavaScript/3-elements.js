'use strict';

{
  // PACKED_SMI_ELEMENTS
  const array = [1, 2, 3]; // number[] smi[]
  console.log(array);
}

{
  // PACKED_DOUBLE_ELEMENTS
  const array = [1, 2, 3, 4 / 3]; // double[]
  console.log(array);
}

{
  // PACKED_DOUBLE_ELEMENTS
  const array = [1, 2, 3]; // smi[]
  array.push(4 / 3); // smi[] -> double[]
  // [1.0, 2.0, 3.0, 1.3333333333333333]
  console.log(array);
}

{
  // PACKED_ELEMENTS
  const array = [1, 2, 3, 'hello']; // object[]
  // [Number(1), Number(2), Number(3), String('hello')]
  console.log(array);
}

{
  // PACKED_ELEMENTS
  const array = [1, 2, 3]; // smi[]
  array.push('hello'); // smi[] -> object[]
  // [Number(1), Number(2), Number(3), String('hello')]
  console.log(array);
}

{
  // HOLEY_SMI_ELEMENTS
  const array = [1, 2, 3, , , 4];
  console.log(array);
}

{
  // HOLEY_SMI_ELEMENTS
  const array = [1, 2, 3];
  array[100] = 4; // smi[] -> holey smi[]
  console.log(array);
}

{
  // HOLEY_DOUBLE_ELEMENTS
  const array = [1, 2, 3, , , 4 / 3];
  console.log(array);
}

{
  // HOLEY_DOUBLE_ELEMENTS
  const array = [1, 2, 3];
  array[100] = 4 / 3; // smi[] -> holey double[]
  console.log(array);
}

{
  // HOLEY_ELEMENTS
  const array = [1, 2, 3, , , 'hello']; // object[]
  // [Number(1), Number(2), Number(3), <2 empty items>, String('hello')]
  console.log(array);
}

{
  // HOLEY_ELEMENTS
  const array = [1, 2, 3]; // smi[]
  array[100] = 'hello'; // smi[] -> holey object[]
  // [Number(1), Number(2), Number(3), <97 empty items>, String('hello')]
  console.log(array);
}
