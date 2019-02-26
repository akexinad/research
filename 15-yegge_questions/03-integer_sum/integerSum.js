// Write a function that sums up integers from a text file, one int per line.

const fs = require('fs'); // File system code from the node std library.

const sumIntegers = function (filename) {
  let sum = 0;
  const file = fs.readFileSync(filename, 'utf-8');

  file.split('\n').forEach(function (line) {
    const n = Number(line);
    sum += n;
  });
  return sum;
};

// const sumIntegers = function (filename) {
//   const file = fs.readFileSync(filename, 'utf-8');
//   return file.split('\n').reduce(function (acc, n) {
//     return Number(acc) + Number(n);
//   });
// };

console.log( sumIntegers('./integers.txt') );


// TRY THIS WITH THE ASYNCHRONOUS VERSION
