'use strict';

const avg = array => {
  let sum = 0;
  for (const item of array) {
    sum += item;
  }
  return sum / array.length;
};

{
  const array = [10, 20, 30, 40];
  console.dir({ array });
  console.log(avg(array));
}
{
  const array = [50, 56, 80];
  console.dir({ array });
  console.log(avg(array));
}
{
  const array = [50, 55, 80 / 7];
  console.dir({ array });
  console.log(avg(array));
}
