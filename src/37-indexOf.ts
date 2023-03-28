export {};

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function

// First variant - with filter() method:
// function remove(arr: (string | number)[],
//   valueToRemove: string | number
//   ): (string | number)[] {
//   const newArr = arr.filter(function (value: string | number) {
//     return value !== valueToRemove;
//   });
//   return newArr;
// }

// Second variant - with indexOf() method:
function remove(
  arr: (string | number)[],
  valueToRemove: string | number
): (string | number)[] {
  //Variant with splice() method:
  // const indexToRemove = arr.indexOf(valueToRemove);
  // const newArr = [...arr];
  // if (indexToRemove !== -1) {
  //   newArr.splice(indexToRemove, 1);
  // }
  // return newArr;

  // Variant with slice() method:
  const indexToRemove = arr.indexOf(valueToRemove);
  const newArr = [
    ...arr.slice(0, indexToRemove),
    ...arr.slice(indexToRemove + 1),
  ];
  return newArr;

  // And add this line of code , to implement this condition: "return a new array with the first item matching `valueToRemove` removed"
  // newArr.unshift(valueToRemove);
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);


/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
