const rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
const raceWinners = [33, 44, 55];
const myFavouriteThings = ['Broccoli', 60432, true, Math.PI];

// length of the array:
rainbowColors.length;
myFavouriteThings.length;

// array locations:
rainbowColors[ 7 ]; //This will give you undefined as there are 7 elemenst whose count starts from 0.

// Actual array length:
raceWinners.length - 1;

// You can make changes or add things to the list:
myFavouriteThings[0] = 'Celery Root';

// To make sure you're adding things at the end of the list:
myFavouriteThings.push('Pappardelle');


// Using loops and arrays together. This code will give us the undex number and its respective item:

let rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

for (let i = 0; i < rainbowColors.length; i++) {
  console.log(i, rainbowColors[i]);
};

// You can do this with strings:

let letters = 'ROYGBV';

for (i = 0; i < letters.length; i++) {
  console.log();
}
