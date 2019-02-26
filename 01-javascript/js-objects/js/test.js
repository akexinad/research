// const myCats = [
//   {name: "Lizzie",
//    age: 18},
//   {name: "Daemon",
//    age: 1}
// ];
//
// console.log(myCats);


lizzieTheCat = {
  age: 18,
  furColor: 'grey',
  meow: function() {
    console.log('meowww');
  },
  eat: function(food) {
    console.log('Yum, I love ' + food);
  },
  sleep: function(numMinutes) {
    for (var i = 0; i < numMinutes; i++) {
      console.log('z');
    }
  }
};


//This will create a string of the z's and show them joined together.

lizzieTheCat.sleep = function (numMinutes) {
  (new Array(numMinutes)).fill('z').join('') );
};

// Another example
const bros = ['groucho', 'harpo', 'chico']

// Putting the keys or values in an array using the object called 'object'

object.keys( lizzieTheCat );
object.values( lizzieTheCat );

// this can be followed by a for loop.
