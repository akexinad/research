console.log('ciao mondo');

// global scope ////////////////////////////////////////////////////////////
const message = "Hello World";

const showMessage = function () {
  console.log( message );
};

showMessage();


// Local or function scope //////////////////////////////////////////////////

const showLocalMessage = function () {
  const localMessage = "Goodbye world";
  console.log( localMessage );
}

showLocalMessage();
// console.log( localMessage ); // localMessage has gone out of scope.

// var inside a block //////////////////////////////////////////////////////
// a car has "function scope"
if (23 === 23) {
  var hotdogs = true;
  console.log( hotdogs );
}

console.log( hotdogs );

// let inside a block ///////////////////////////////////////////////////////
// a let has "block scope"
if (-10 === -10) {
  let goldfish = true;
  console.log( goldfish );
}

// console.log( goldfish ); goldfish has gone out of scope.

// loop with a var vs let ///////////////////////////////////////////////////
for (var i = 0; i < 5; i++) {
  console.log( i );
};

// console.log(i); will equal 5 in the var mode.

for (let i = 0; i < 5; i++) {
  console.log( i );
};

// const inside a block ////////////////////////////////////////////////////////
// const has block scope too (same as the let)
if (17 === 17) {
  const password = 'swordfish';
  console.log( password );
};

console.log( password );
