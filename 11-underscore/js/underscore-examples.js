const bros = "Fellini Benigni Pasolini Germi".split(' ');

// .each for arrays and objects
_(bros).each(function (b) {
  console.log(b.toUpperCase());
});

// .map works for arrays and objects
const upperBros = _(bros).map(function (b) {
  return b.toUpperCase();
});

console.log(bros, upperBros);

// .find works for arrays and objects
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const firstEven = _(numbers).find(function (n) {
  return n % 2 === 0;
});

console.log(firstEven);

// .filter
const evens = _(numbers).filter(function (n) {
  return n % 2 === 0;
});

console.log(evens);

// .where
const library = [
  {author: 'James Joyce', title: 'Dubliners'},
  {author: 'James Joyce', title: 'Ulysses'},
  {author: 'Dan Brown', title: 'The Da Vinci Code'},
  {author: 'James Joyce', title: 'Finnegans Wake'},
];

const joyceBooks = _(library).where( {'author': 'James Joyce'} );
console.log(joyceBooks);

// .pluck
const titles = _(library).pluck('title');
console.log(titles);

// .max and .min
const scores = [24, 67, 98, 12, 4, 15, 78, 99];
console.log( _(scores).max(), _(scores).min() );

// .shuffle
console.log( _(scores).shuffle() );

// .sample
console.log( _(scores).sample(2) );
