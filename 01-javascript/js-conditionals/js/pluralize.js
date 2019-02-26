/*

The Pluralizer
Write a function named pluralize that:

takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

*/

// const pluralize = function (noun, num) {
//   let word = noun.slice(-1);
//   if (noun !== "s" && num === 1) {
//     return num + " " + noun;
//   } else {
//     return
//   }
// }


/*
-------------
JOEL'S ANSWER
-------------
*/

const pluralize = function (noun, number) {
  let output = `${ number } ${ noun }`;
  if (1 === number) {
    return output;
  } else {
    return output + 's';
  }
};

console.log(pluralize('cat', 0));
console.log(pluralize('dog', 1));
console.log(pluralize('horse', 7));



const pluralize = function (noun, number) {
  let output = `${ number } ${ noun }`;
  if (1 !== number) {
    output += 's'; //which also means output + output + 's';
  }
    return output + 's';
};
