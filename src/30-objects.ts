export {};

/**
 * Ah, objects...
 * One of the most important concepts to understand in programming,
 * especially in JavaScript since the whole language is pretty much just objects 🤯
 *
 * Luckily they're not so difficult to learn. As always w3schools will help:
 *  - https://www.w3schools.com/js/js_objects.asp
 */

interface I_Book {
  title: string;
  author: string;
  year?: number;
}

const books: I_Book[] = [
  {
    title: "4 hour work week",
    author: "Tim Ferris",
    year: 2023,
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris",
  },
];

// const getTheTitles = (books: I_Book[]) => books.map((book) => book.title);
const valueToGet = "title";
const getTheTitles = (books: I_Book[]) => books.map((book) => book[valueToGet]);
console.log(getTheTitles(books));
// Expected output: ['4 hour work week', 'Tools of Titans']
