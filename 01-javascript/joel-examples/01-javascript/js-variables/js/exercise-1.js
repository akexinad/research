/*

The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

*/

const numOfChildren = 3;
const partnerName = "Jane";
const geographicLocation = "New Guinea";
const jobTitle = "Folk poet";

// String concatenation
// const fortune = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numOfChildren + " kids.";

// ES6: String interpolation
const fortune = `You will be a ${ jobTitle } in ${ geographicLocation }, and married to ${ partnerName } with ${ numOfChildren } kids.`;

console.log(fortune);
