export {};

function truncateString(str: string, length: number): string {
  return str.slice(0, length);
}

// function truncateString(str: string, length: number): string {
//   return str.substring(0, length);
// }

// function truncateString(str: string, length: number): string {
//   let myString: string = "";
//   for (let i = 0; i < length; i++) {
//     myString += str[i];
//   }
//   return myString;
// }

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
