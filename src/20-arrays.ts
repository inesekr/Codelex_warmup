export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */

function stringToArray(strArray: string[]): string[] {
  // return strArray[0].split(" ");// if I know there is only one element in array

  const result: string[] = [];
  strArray.forEach((str) => {
    result.push(...str.split(" "));
  });
  return result;
}

console.log(stringToArray(["John Doe", "Jānis Bērziņš"])); // Expected output: ['John', 'Doe']
