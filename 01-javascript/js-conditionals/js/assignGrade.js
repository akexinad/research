/*

The Grade Assigner
Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

*/

// const assignGrade = function (numScore) {
//   if (numScore <= 100 && numScore >= 90) {
//     return "A";
//   }
//   else if (numScore < 90 && numScore >= 80) {
//     return "B";
//   }
//   else if (numScore < 80 && numScore >= 70) {
//     return "C";
//   }
//   else if (numScore < 70 && numScore >= 60) {
//     return "D";
//   }
//   else if (numScore < 60 && numScore >= 50) {
//     return "E";
//   }
//   else if (numScore < 50) {
//     return "F";
//   };
// };
//
// console.log(assignGrade(95));
// console.log(assignGrade(34));
// console.log(assignGrade(50));

/*
-------------
JOEL'S ANSWER
-------------
*/

const assignGrade = function (score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "E";
  } else {
    return "F";
  }
};

console.log(assignGrade(95));
console.log(assignGrade(34));
console.log(assignGrade(50));
