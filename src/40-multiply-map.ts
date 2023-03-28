export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

  // console.log(cb(myArr[0]));
const map = (myArr: number[], cb: (num: number) => number) => {
  const resultArr: number[] = [];
  for (let i = 0; i < myArr.length; i++) {
    const value = myArr[i];
    const mappedValue = cb(value);
    resultArr.push(mappedValue);
  }
  return resultArr;
};

const numbers = [1, 2, 3];
const doubled = map(numbers, function (number) {
  return number * 2;
});
const tripled = map(numbers, function (number) {
  return number * 3;
});
console.log(doubled); // Expected result: [2, 4, 6]
console.log(tripled); // Expected result: [3, 6, 9]
