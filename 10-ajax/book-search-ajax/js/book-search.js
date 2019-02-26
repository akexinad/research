const $searchInput = $('#book-title');

$('form').on('submit', function(event) {
  event.preventDefault();
  const title = $searchInput.val();
  $searchInput.val('').focus();

  $.ajax('https://www.googleapis.com/books/v1/volumes?q=' + title).done(function (info) {
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    $('#cover').attr('src', cover);
  });
});
