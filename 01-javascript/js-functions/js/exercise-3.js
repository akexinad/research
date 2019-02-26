/*

The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

*/

/*

const myAge = 12;
const myDeath = 123;
const estQty = 56;
const eatTotal = (myDeath - myAge) * estQty * 365.25;

// console.log("You will need " + eatTotal + " nougat bars to last you until the ripe old age of " + myDeath + ".");

const fatShit = `You will need ${ eatTotal } nougat bars to last you until the ripe old age of ${ myDeath }.`;

console.log(fatShit);

*/

const fatBoy = function (myAge, dailyQty) {
  const eatTotal = (60 - myAge) * dailyQty * 365.25;
  console.log(`You will need ${ Math.ceil(eatTotal) } chocolates to last you until the ripe old age of 60.`);
};

fatBoy(28.4, 10);
fatBoy(22.6, 50);
