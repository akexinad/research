/*

The Grade Assigner
Check the results of assignGrade function from the conditionals exercise
for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

*/

for (let g = 60; g <101; g ++) {
  output = `For ${ g }, you got a `
  if (g < 60) {
    console.log(output, 'E');
  } else if (g < 70) {
    console.log(output, 'D');
  } else if (g < 80 ) {
    console.log(output, 'C');
  } else if (g < 90 ) {
    console.log(output, 'B');
  } else {
    console.log(output, 'A');
  }
};


/*
-------------
JOEL'S ANSWER
-------------
*/


for (let i = 60; i <= 100; i++) {
  console.log(`For ${ i }, you got a ${ assignGrade(i) }.`);
}
