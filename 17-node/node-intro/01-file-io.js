// recreate the cat program in JS.
const fs = require('fs'); // From the node standard library

// synchronously
// fs.readFileSync('filename', 'fileencoding');
// const fileData = fs.readFileSync('flintstones.txt', 'utf-8'); // Sync means this is a blocking function.
// console.log(fileData);

// Asynchronus IO
// Better efficiency because it's non blocking.
// Needs a callback function which will usually recieve:
//   error param (node.js is usually "error first")
//   data param

fs.readFile('flintstones.txt', 'utf-8', function (error, data) {
  if (error) {
    return console.error(error); // This is a bit wanky.
  }
  console.log(data);
});

// TODO: Rewrite this code to use promises.
