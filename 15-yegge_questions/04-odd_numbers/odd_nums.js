// Write function to print the odd numbers from 1 to 99.

// const oddNums = function () {
//   let num = 0;
//   while (num < 100) {
//     if (num % 2 !== 0) {
//       console.log(num);
//     }
//     num ++;
//   }
// }
//
// console.log(oddNums());
//
// const printOddNumbers = (upperBound=99) => {
//   for (let n = 1; n < upperBound.length; n++) {
//     if (n % 2 !== 0) {
//       console.log( n );
//     }
//   }
// }
//
// printOddNumbers();

const oddNumR = function(num) {
  if (num % 2 !== 0) {
    console.log(num);
    oddNumR(num - 1)
  } else if (num = 0) {
    return
  }
}

oddNumR(99);
