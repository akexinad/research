/*

The Reading List
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string),
and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like
'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read
"The Lord of the Rings" by J.R.R. Tolkien.'

*/

// const books = [
//   {title: 'Meditations',
//   author: 'Marcus Aurelius',
//   alreadyRead: true},
//   {title: 'The Old Man and the Sea',
//   author: 'Ernest Hemingway',
//   alreadyRead: true},
//   {title: '1984',
//   author: 'George Orwell',
//   alreadyRead: false,
//   },
// ];
//
// console.log(books);
//
// for (let i = 0; i < books.length; i++) {
//   console.log(`${ books[i].title } by ${ books[i].author }.`);
//   if (books[i].alreadyRead === true) {
//     console.log(`You already read '${ books[i].title }' by ${ books[i].author }.`);
//   } else {
//     console.log(`You still need to read '${ books[i].title }' by ${ books[i].author }.`);
//   }
// };


/*
-------------
JOEL'S ANSWER
-------------
*/


const library = [
  {title: "Ulysses", author: "James Joyce", alreadyRead: true},
  {title: "My Country", author: "David Marr", alreadyRead: false},
  {title: "Profanasaurus", author: "Roger Mellie", alreadyRead: false},
];

for (i = 0; i < library.length; i++) {
  const book = library[i];
  const bookDetails = (`${ book.title } by ${ book.author }`);

  if (book.alreadyRead === true3) {
    console.log(`You already read ${ bookDetails }.`);
  } else {
    console.log(`You still need to read ${ bookDetails }.`);
  }
}

console.log(library);