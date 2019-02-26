/*

Your top choices
Create an array to hold your top five choices of something (dogs, books, presidents, whatever).
If you choose movies, the right top choice is "Satantango".

For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
picking the right suffix for the number based on what it is.

*/

let topChoice = ['vegans', 'pork', 44, 'pappardelle', 'scotch'];

for (i = 0; i < topChoice.length; i++) {
  if (i = 0) {
    console.log(`My first choice is ${topChoice[i]}.`);
  } else if (i = 1) {
    console.log(`My second choice is ${topChoice[i]}.`);
  } else if (i = 2) {
    console.log(`My third choice is ${topChoice[i]}.`);
  } else {
    console.log(`My ${ i + 1 }th choice is ${topChoice[i]}.`);
  }
};

/*
-------------
JOEL'S ANSWER
-------------
*/

for (let i = 0; i < topChoice.length; i++) {
  console.log(`My ${ i + 1 } is ${ topChoice[i] }.`);
};
