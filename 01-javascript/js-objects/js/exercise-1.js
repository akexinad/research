/*

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string),
servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

*/

// const myCats = [
//   {name: "Lizzie",
//    age: 18},
//   {name: "Daemon",
//    age: 1}
// ];
//
// console.log(myCats);


// const recipeCard = [
//   {title: 'Pappardelle alla Lepre',
//   serves: 2,
//   ingredients: ['Pappardelle', 'Hare', 'Ragu']},
//   {title: 'Gnocchi grassi',
//   serves: 4,
//   ingredients: ['Potatoes', 'Flour', 'Gorgonzola', 'Taleggio', 'Asiago']},
// ];
//
// console.log(recipeCard[0].title);
// console.log(recipeCard[0].serves);
// console.log(recipeCard[0]);



/*
-------------
JOEL'S ANSWER
-------------
*/


const recipe = {
  title: "Butterscotch",
  servings: 1,
  ingredients: [
    "Butter",
    "Scotch"
  ]
};

console.log( recipe.title );
console.log( `Serves: ${ recipe.servings }`);
console.log( `Ingredients:`);

for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
};
