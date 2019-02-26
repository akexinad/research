
/*

The World Translator
Write a function named helloWorld that:

takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.

*/

// const helloWorld = function (langCode) {
//   if (langCode === 'de') {
//     return 'Hallo Welt';
//   }
//   else if (langCode === 'it') {
//     return 'Ciao Mondo'
//   }
//   else if (langCode === 'es') {
//     return 'Ola mundo'
//   }
//   else {
//     return 'Hello World'
//   }
// };
//
// console.log(helloWorld('de'));
// console.log(helloWorld('it'));
// console.log(helloWorld('es'));
// console.log(helloWorld('jp'));


/*
-------------
JOEL'S ANSWER
-------------
*/

const helloWorld = function (code) {
  if (code === 'es') {
    return "Hola mundo!";
  } else if ('de' === code) {
    return 'Hallo Welt!';
  } else if ("en" === code) {
    return "Hello World";
  } else {
    return "Hello World";
  }
};


console.log(helloWorld('es'));
console.log(helloWorld('de'));
console.log(helloWorld('en'));
console.log(helloWorld('jp'));
