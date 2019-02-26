$(document).ready( () => {
  $('#add-color').on('click', () => {
    const color = $('#color').val();
    // create a swatch in that color
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  });

  // Event delegation: $('parent').on('event', 'child', ...)
  $('.palette').on('click', '.swatch', function () {
    $('.swatch.selected').removeClass('selected'); // Deselect swatches
    $(this).addClass('selected');
  })

  // Event delelgation for memory efficiency
  $('.canvas').on('mouseover', '.pixel', function (event) {
    console.log(event);
    if (event.shiftKey === false) {
      return;
    }
    // find the current selected swatch colour
    const color = $('.swatch.selected').css('background-color');
    // set this pixel to have that background colour
    $(this).css('background-color', color);
  });
});
