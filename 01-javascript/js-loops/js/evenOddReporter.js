/*

The even/odd reporter
Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

*/

// for (let x = 0; x < 21; x++) {
//   if (x % 2 === 0) {
//     console.log('EVEN MOTHERFUCKER!!!!');
//   } else {
//     console.log("WOOOOOOOOOOWEEEEEEEEEE!!!!. It's odd buddy");
//   }
// };


/*
-------------
JOEL'S ANSWER
-------------
*/

for (init; conditional; update) {

};

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${ i } is even.`);
  } else {
    console.log(` ${ i } is odd.`);
  }
};
