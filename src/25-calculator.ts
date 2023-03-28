export {};

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

// function sum(array: number[]): number {
//   let sum: number = 0;
//   array.forEach((num) => {
//     sum += num;
//   });
//   return sum;
// }

function sum(array: number[]): number {
  const sum: number = 0;
  const total: number = array.reduce((a, b) => a + b, sum);
  return total;
}

function multiply(array: number[]): number {
  let result: number = 1;
  array.forEach((num) => {
    result *= num;
  });
  return result;
}

// function power(a: number, b: number): number {
//   return Math.pow(a, b);
// }

function power(a: number, b: number): number {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= a;
  }
  return result;
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
