export {};

const repeatString = (text: string, num: number): string => {
  let myText = "";
  for (let i = 1; i <= num; i++) {
    myText += text;
  }
  return myText;
};

// Second variant, with built-in .repeat() method:
// const repeatString= (text: string, num: number): string=>{
//   return text.repeat(num);
// }


console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
