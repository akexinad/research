// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

// const fizzbuzz = function(num) {
//
//   while (num < 1756) {
//     if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
//       console.log("fizzbuzzbooozz");
//     } if (num % 3 === 0 && num % 5 === 0) {
//       console.log("fizzbuzz");
//     } if (num % 3 === 0) {
//       console.log("fizz");
//     } if (num % 5 === 0) {
//       console.log("buzz");
//     } if (num % 7 === 0) {
//       console.log("booozz");
//     } else {
//       console.log(num);
//     }
//
//     num ++;
//   }
// }
//
// console.log(fizzbuzz(0));

const fizzbuzzR = function(num) {
  if (num < 0) {
    return
  } if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
    console.log("fizzbuzzbooozz");
  } if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzbuzz");
  } if (num % 3 === 0) {
    console.log("fizz");
  } if (num % 5 === 0) {
    console.log("buzz");
  } if (num % 7 === 0) {
    console.log("booozz");
  } else {
    console.log(num);
  }

  fizzbuzzR(num -1)
}

fizzbuzzR(2000);
