

document.onload = function () {

  const button = document.getElementById('lib-button');

  const makeMadLib = function () {
    let person = document.getElementById('person').value;
    let adjective = document.getElementById('adjective').value;
    let noun = document.getElementById('noun').value;
    let storyEl = document.getElementById('story');
    storyEl.innerHTML = "I never knew " + person + " used to enjoy " + adjective + " " + noun + ".";
  }

  button.addEventListener('click', makeMadLib);

};

return document.onload;
