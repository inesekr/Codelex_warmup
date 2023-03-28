export {};

// function onlyTheAces(arr: string[]) {
//   let result: string[] = [];
//   arr.forEach((str) => {
//     if (str === "Ace") {
//       result.push(str);
//     }
//   });
//   return result;
// }

function onlyTheAces(arr: string[]) {
  return arr.filter(word=>word==="Ace");
  
}


console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
