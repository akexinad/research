const searchInput = document.getElementById('book-title');
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // This will disable the form from taking us to another page.
  // Retrieve the book title.
  const title = searchInput.value;
  searchInput.focus();
  // console.log(title);

  // Fetch info from google books.
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    // console.log(xhr.readyState, xhr.responseText); // This will log your readyStates
    if (xhr.readyState !== 4) return;
    // console.log('readyState must now be equal to 4', xhr.readyState);
    const info = JSON.parse(xhr.responseText);
    // debugger;
    // Display the thumbnail. -- This has to go in a callback because of the asynchronous nature of JS.
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    document.getElementById('cover').src = cover;
  }

  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + title);
  xhr.send();
});
