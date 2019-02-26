/*

Create a new Javascript file and link to it with a script tag at the bottom. X

(In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

(In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

Create a new img element and set its src attribute to a picture of you. Append that element to the page.


*/

//////////////////// ONE /////////////////////////////

bodyNode = document.getElementsByTagName('body')[0];
bodyNode.style.fontFamily = 'Arial, sans-serif';

let spanNodeNickname = document.getElementsByTagName('li')[0];
spanNodeNickname.innerHTML = "Hippo Ribs: <span id='banananana'></span>";

spanNodefavourites = document.getElementsByTagName('li')[1];
spanNodefavourites.innerHTML = "Fantastic Furniture:  <span id='mein kampfy chair'></span>";

spanNodehometown = document.getElementsByTagName('li')[2];
spanNodehometown.innerHTML = "Butter sprinkles: <span id='great choice mate'></span>";

////////////////// TWO /////////////////////////////

let myItems = document.querySelectorAll('li span');

// const newClassFunc = function () {
  for (let i = 0; i < myItems.length; i++) {
    myItems[i].className = "listitem";
    console.log(myItems);
  }
// };

// newClassFunc(myItems);
console.log(myItems);

///////////////////////////// THREE ///////////////////////////////

let newImg = document.createElement('img');
newImg.src = 'img/daniels-space-traveller.jpg';
newImg.style.border = '5px solid red';
bodyNode.appendChild(newImg);
