// Promises are an eveolution of the idea of callbacks

const fs = require('fs');

// readFile is asynchronous:
// You must provide a callback to have any access to the content of the file
// and it must handle both success and failure.

// fs.readFile('example.txxxt', 'utf-8', (err, content) => {
//   if (err) {
//     throw err; // Failure Crash the program
//   }
//
//   console.log(content); // Success: Print the content
// });


// Let's wrap fs.readFile to use a promise.
const readFile = (fileName) => {
  return new Promise( (resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, content) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(content);
    });
  });
};

readFile('example.txt')
.then( (c) => {
  console.log(c);
})
.catch( (err) => {
  console.error("There was error", err);
})

// To look into: Promise.all(), Promise.race()
