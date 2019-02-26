// Make an AJAX request  for number API data and log it in the console
const xhr = new XMLHttpRequest(); // Create a little js browser.
xhr.open('GET', 'http://numbersapi.com/random/trivia?json'); // Configure the browser

xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) {
    return; // If the state change is not 4, return to the start of the function.
  }

  // Turn the JSON string into an actual JS object.
  const data = JSON.parse(xhr.responseText)

  console.log(xhr.responseText);
  console.log(data);
  document.body.innerHTML = data.text; // NOW we can show it on the page
};

xhr.send(); // Press enter: start the ASYNCHRONOUS request. You will need to set a timeout to give it time to retrieve the request.
console.log('Here is your trivia', xhr.responseText);

/// WE CAN PUT ALL OF THE ABOVE IN A FUNCTION

const fetchFact = function () {
  const xhr = new XMLHttpRequest(); // Create a little js browser.
  xhr.open('GET', 'http://numbersapi.com/random/trivia?json'); // Configure the browser

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    const data = JSON.parse(xhr.responseText);

    const p = document.createElement('p');
    p.innerHTML = data.text;
    console.log(p);
    document.body.appendChild(p);
  }
  xhr.send();
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();
