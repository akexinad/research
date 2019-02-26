/*

The fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

*/

/*

const numChildren = 2;
const partnerName = "Nancy";
const geoLoc = "Magliano";
const jobTitle = "Engineer";

// console.log("You will be a " + jobTitle + " in " + geoLoc + ", and married to " + partnerName + " with " + numChildren + " kids.")

const fortune = `You will be an ${ jobTitle } in ${ geoLoc }, and married to ${ partnerName } with ${ numChildren } kids.`;

console.log(fortune);

*/

const fortuneTeller = function (numChild, partnerName, geoLoc, jobTitle) {
  console.log(`You will be a ${ jobTitle } in ${ geoLoc }, and married to ${ partnerName } with ${ numChild } kids.`);
};

fortuneTeller(2, "Nancy", "Mali", "Engineer");
fortuneTeller(3, "Melissa", "Rome", "Architect");
