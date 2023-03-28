export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

// const protectEmail = (email: string) => {};
function protectEmail(email: string) {
  const firstPartLength: number = email.indexOf("@");
  const secondPart = email.slice(firstPartLength);
  const firstPart = email.slice(0, firstPartLength);
  if (firstPartLength <= 3) {
    email = `...${secondPart}`;
  } else if (firstPartLength >= 4 && firstPartLength <= 6) {
    const elToShow = firstPart.substring(0, firstPart.length - 3);
    email = `${elToShow}...${secondPart}`;
  } else {
    const elToShow = firstPart.substring(0, 3);
    email = `${elToShow}...${secondPart}`;
  }
  return email;
}

console.log(protectEmail("secret123@codelex.io"));
// Expected result: sec...@codelex.io

console.log(protectEmail("example@example.com"));
// Expected result: exa...@example.com

console.log(protectEmail("12345@example.com"));
// Expected result: 12...@example.com

console.log(protectEmail("12@example.com")); // Expected result: ...@example.com
