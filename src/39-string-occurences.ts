export {};

const count = (str: string, subStr: string) => {
  // With Regex:
  const regex = new RegExp(subStr, "gi");
  const matches = str.match(regex);
  return matches ? matches.length : 0;


  // With split() method - usin substring as separator:
  // let lowerCaseSubStr = subStr.toLowerCase();
  // let count = str.toLowerCase().split(lowerCaseSubStr).length - 1;
  // return count;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
