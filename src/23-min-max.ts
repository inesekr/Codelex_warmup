export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

//Solution using built-in Math methods:
// const min = (array: number[]): number => {
//   return Math.min(...array);
// };
// const max = (array: number[]): number => {
//   return Math.max(...array);
// };

const min = (array: number[]): number | undefined => {
  let minimal: number | undefined;
  array.forEach((num) => {
    if (minimal === undefined || num < minimal) {
      minimal = num;
    }
  });
  return minimal;
};

// const max = (array: number[]): number | undefined => {
//   let maximal: number | undefined;
//   array.forEach((num) => {
//     if (maximal === undefined || num > maximal) {
//       maximal = num;
//     }
//   });
//   return maximal;
// };

const max = (array: number[]) => {
  return Math.max(...array);
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
