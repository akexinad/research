// Print out the grade-school multiplication table up ro 12 x 12

// TODO: write or find an sprintf()
const twelveTimesTable = function () {
  for (let i = 0; i <= 12; i++) {
    console.log( `${ i } x 12 = ${ i * 12 }` );
  }
};

twelveTimesTable();
