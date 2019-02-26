// const doSecretThingWithConfidentialInfo = function () {
//   const password = 'swordfish'; // This variable is still visible within showPassword VIA the closure.
//
//   const showPassword = function () {
//     console.log( 'The password is', password );
//   }
//
//   return showPassword;
// };
//
// const passwordShower = doSecretThingWithConfidentialInfo();


// let id = 0;
//
// const nextId = function () {
//   return id++; // Returns and increments the ID;
// };

const idMaker = function () {
  // sets up an initial id;
  let id = 0;

  // return a function which THROUGH A CLOSURE WILL STILL HAVE ACCESS TO THAT ID.
  return function () {
    return id++; // id persists through the closure.
  }
};

const nextId = idMaker();

const brothers = [
  { name: "Fellini", id: nextId() },
  { name: "Benigni", id: nextId() },
  { name: "Germi", id: nextId() },
];

// HTML Tag Demo //////////////////////////////////////////////////////////////////////////////////////////
// const p = function (content) {
//   return '<p>' + content + '</p>';
// };
//
// const h1 = function (content) {
//   return '<h1>' + content '</h1>';
// };
//
// const h2 = function (content) {
//   return '<h2>' + content '</h2>';
// };

// const tag = function (tagName) {
//
//   return function (content) {
//     return `<${ tagName }>${ content }</${ tagName }>`
//   };
//
// };

// const p = tag('p');
// const h1 = tag('h1');
// const h2 = tag('h2');
// const span = tag('span');
// const div = tag('div');

// JQuery code might also use closure without you thinking much about it.
$(document).ready(function () {
  const mySecretPassword = "chicken";

  $('button').on('click', function () {
    // mySecretPassword persists in this function via the closure.
    console.log('Here is the secret password', mySecretPassword);
  });

  console.log('The document ready function is over.');

});
