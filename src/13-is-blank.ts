export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

function isBlank(value: string | null): boolean {
  // if (value === null || value.trim() === "") {
  //   return true;
  // } else {
  //   return false;
  // }
  return value === null || value.trim() === "";
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
