console.log('ciao mondo');
 /*

 Create a new Javascript file and link to it with a script tag at the bottom.

 For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.

 Bonus: respond to key presses so that the user doesn't have to click the button.

 */

 const squareButtonEl = document.getElementById('square-button');
 const halfButtonEl = document.getElementById('half-button');
 const percentButtonEl = document.getElementById('percent-button');
 const areaButtonEl = document.getElementById('area-button');


 const squareNumber = function () {
   let squareInput = document.getElementById('square-input').value;
   let solutionEl = document.getElementById('solution');
   solutionEl.innerHTML = squareInput ** 2;
 };

squareButtonEl.addEventListener('click', squareNumber);

const halfNumber = function() {
  let halfInput = document.getElementById('half-input').value;
  let solutionEl = document.getElementById('solution');
  solutionEl.innerHTML = halfInput / 2;
};

halfButtonEl.addEventListener('click', halfNumber);

const fraction = function () {
  let numerator = document.getElementById('percent1-input').value;
  let denominator = document.getElementById('percent2-input').value;
  let solutionEl = document.getElementById('solution');
  solutionEl.innerHTML = `${ (numerator / denominator) * 100 } %`;
};

percentButtonEl.addEventListener('click', fraction);

const area = function () {
  let radius = document.getElementById('area-input').value;
  let solutionEl = document.getElementById('solution');
  solutionEl.innerHTML = 2 * Math.PI * radius + " square meters.";
};

areaButtonEl.addEventListener('click', area);
