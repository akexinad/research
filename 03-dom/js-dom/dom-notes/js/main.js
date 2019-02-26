// console.log('ciao mondo');

/////////// ITERATING THROUGH AN ARRAY OF ELEMENTS, CLASSES ETC ///////////////

// let watchNames = document.getElementsByClassName('watches');

// let watchNames = document.getElementsByTagName('li');

let watchNames = document.querySelectorAll('ul li.watches');

const watchFunc = function(list) {
  for (let i = 0; i < watchNames.length; i++) {
    let watchName = watchNames[ i ];
    console.log(watchName);
  };
};

// watchFunc(watchNames);



/////////// CHANGING ELEMENT ATTRIBUTES ////////////////////////////

let img = document.getElementById('fill-murray');

let oldSrc = img.src;
img.src = 'http://fillmurray.com/600/600';

img.className = 'new-picture';

//////////////////// CHANGING AN ELEMENT'S STYLE ////////////////////

///CHANGE THE BODY STYLE
let bodyNode = document.getElementsByTagName('body')[0];
bodyNode.style.backgroundColor = 'limegreen';
bodyNode.style.width = '300px';
// bodyNode.innerHTML = "<h1>La volonta` costa niente</h1> <p>Lorem ipsum brittle gypsum.</p>";

//// CHANGE HEADING 1 STYLE
let h1Node = document.getElementsByTagName('h1')[1];
h1Node.style.color = 'blue';
h1Node.innerHTML = "<h1>La volonta` costa niente</h1>"


////////////////////////// CREATING NEW ELEMENTS ///////////////////////////

///// ADD NEW IMAGE
let newImg = document.createElement('img');
newImg.src = 'img/daniels-space-traveller.jpg';
newImg.style.border = '1px solid black';
bodyNode.appendChild(newImg);


//// ADD NEW TEXT ELEMENTS
let newHeading2 = document.createElement('h2');
let heading2Text = document.createTextNode('Keep time on Mars');
let newParagraph = document.createElement('p');
let paragraphText = document.createTextNode('This is george Daniels space traveller watch.');
newHeading2.appendChild(heading2Text);
bodyNode.appendChild(newHeading2);
newParagraph.appendChild(paragraphText);
bodyNode.appendChild(newParagraph);

// alert("Hello World!");
// alert('ciao mondo');


/////////////////////// ANIMATION IN JAVASCRIPT /////////////////////////////

///// STARTING ANIMATIONS
/////// RESIZING IMAGES //////////
const makeImageBiggerOrSmaller = function () {
  const img = document.getElementsByTagName('img')[1];
  img.setAttribute('width', img.width-5);
};

window.setInterval(makeImageBiggerOrSmaller, 4000);


///// ANIMATING STYLES
/////
////// FADING AWAY ///////////
let imgVar2 = document.getElementsByTagName('img')[0];

imgVar2.style.opacity = 1.0;

const fadeAway = function () {
  imgVar2.style.opacity = imgVar2.style.opacity - .1;
};

// window.setInterval(fadeAway, 1000);


///////// FALLING IMAGES /???????????
let imgVar3 = document.getElementsByTagName('img')[0];

imgVar3.style.position = 'absolute';
imgVar3.style.top = '0px';

const watchMurrayFall = function () {
  let oldTop = parseInt(imgVar3.style.top);
  let newTop = oldTop + 1;
  imgVar3.style.top = newTop + 'px';
}

// window.setInterval(watchMurrayFall, 20);

//////// STOPPING AN ANIMATION /////////////

let imgVar4 = document.getElementsByTagName('img')[0];

imgVar4.style.opacity = 1.0;

const stopFadeAway = function () {
  imgVar4.style.opacity = imgVar4.style.opacity - .1;
  if (imgVar4.style.opacity < .5) {
    window.clearInterval(fadeTimer);
  }
};

let fadeTimer = window.setInterval(stopFadeAway, 250);
