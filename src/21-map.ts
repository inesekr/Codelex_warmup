export {};

function tidyUpString(str: string): string {
  return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string): string {
  // return str.charAt(0).toUpperCase() + str.slice(1);
  return str[0].toUpperCase() + str.slice(1);
}

const mentors: string[] = ["/Daniel ", "irina ", " Gordon", "ashleigh "];

const mentorsTidy = mentors.map((str) => capitalise(tidyUpString(str)));
// const mentorsTidy = mentors.map(tidyUpString).map(capitalise);
// You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
