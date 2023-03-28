export {};

function getNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min)) + min;
}

const result = getNumber(500, 600); // call the function created above and put the result inside the variable
console.log(result); // Expected output: {random number}
