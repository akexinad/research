/*

Step by Step:
Create an array of every link on the page using document.querySelectorAll(cssSelector)

Iterate through the array. In each iteration of the loop:

Find the current href using element.getAttribute(name), and store into a variable

Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)

Create an IMG element using document.createElement(tagName)

Set the "src" of the IMG element using element.setAttribute(name, value)

Append the IMG to the link using element.appendChild(element)

*/


// const youTubeLinks = document.querySelectorAll('ul li');
// console.log(youTubeLinks);
//
// for (let i = 0; i < youTubeLinks.length; i++) {
//   let liEl = document.getElementsByTagName('li')
//   let attributeEl = liEl.getAttribute('href');
//   console.log(attributeEl);
// }

/*
------------
JOELS ANSWER
------------
*/


const links = document.querySelectorAll('ul a');
console.log(links);

for (let i = 0; i < links.length; i++) {
  let href = links[i].getAttribute('href');
  const thumbnailUrl = youtube.generateThumbnailUrl(href);
  const thumbnail = document.createElement('img');  // DETACHED DOM NODES
  thumbnail.setAttribute('src', thumbnailUrl);
  links[i].appendChild(thumbnail);
}
