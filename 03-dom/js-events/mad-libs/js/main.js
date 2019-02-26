let pageNode = document.getElementsByTagName('body')[0];
// console.log('ciao mondo');

/*

Create a new Javascript file and link to it with a script tag at the bottom.

Add an event listener to the button so that it calls a makeMadLib function when clicked.

In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")


*/

const buttonEl = document.getElementById('lib-button');

const makeMadLib = function () {
  let person = document.getElementById('person').value;
  let adjective = document.getElementById('adjective').value;
  let noun = document.getElementById('noun').value;
  let storyEl = document.getElementById('story');
  storyEl.innerHTML = "I never knew " + person + " used to enjoy " + adjective + " " + noun + ".";
};

button.addEventListener('click', makeMadLib);
