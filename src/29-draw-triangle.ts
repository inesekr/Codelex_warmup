export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(arg: number) :void{
  let result: string = "";
  for (let i = 1; i <= arg; i++) {
    result += "*";
    console.log(result);
  }
}

// function draw(arg: number) {
//   for (let i = 1; i <= arg; i++) {
//     let result: string = "*";
//     console.log(result.repeat(i));
//   }
// }

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
