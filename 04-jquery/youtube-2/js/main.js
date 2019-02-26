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


/*
------------
JOELS ANSWER
------------
*/


// const links = document.querySelectorAll('ul a');
// console.log(links);
//
// for (let i = 0; i < links.length; i++) {
//   let href = links[i].getAttribute('href');
//   const thumbnailUrl = youtube.generateThumbnailUrl(href);
//   const thumbnail = document.createElement('img');  // DETACHED DOM NODES
//   thumbnail.setAttribute('src', thumbnailUrl);
//   links[i].appendChild(thumbnail);
// }
//

//////////// WITH JQUERY ///////////////////

const $links = $('ul a');

for (let i = 0; i < $links.length; i++) {

  // convert a single vanilla dom node back into a jquery-powered object
  const $link = $( $links[i] );

  const href = $link.attr('href'); // THiS WORKS AS A GETTER

  const thumbnailUrl = youtube.generateThumbnailUrl(href);

  const $thumbnail = $('<img>').attr('src', thumbnailUrl); // THIS WORKS AS A SETTER

  $link.prepend($thumbnail);

  // OR ///////////

  $('<img>').attr('src', thumbnailUrl).prependTo($link);
}



///////// IF DOING THIS IN JQUERY FROM SCRATCH //////////////////////



$('ul a').each(function (index, element){
  const href = $(element).attr('href');
  const thumbnailUrl = youtube.generateThumbnailUrl(href);
  $('<img>').attr('src', thumbnailUrl).prependTo($link);
});
