console.log('ciao', jQuery.fn.jquery); /////// SHOWS THE VERSION OF JQUERY. //////////

$(document).ready(function () {
  $('button').on('mouseover', function () {
    $(this).css('background-color', 'pink')
            .css('color', 'blue');
  });

  $('button').on('mouseleave', function () {
    $(this).css('background-color', 'white')
            .css('color', 'black');
  });

  $('li').on('mouseover', function() {
    $(this).css('color', 'red');
  });

  $('li').on('mouseleave', function() {
    $(this).css('color', 'black');
  });
});





$(document).ready(function () {

  $('#name').on('keyup', function () {
    // Update heading with the user input
    const name = $(this).val();
    $('header h1').text(`Welcome ${ name }`);
  }).on('focus', function () {
    $('header').addClass('active');
  }).on('blur', function () {
    $('header').removeClass('active');
  })

  const randomColor = function () {
    return Math.random() * 255;
  }

  $(window).on('mousemove', function (event) {
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    // $('body').css('background-color', bgColor);
  });

  $(window).on('mousemove', function () {
    // get the mouse y position as a percentage of the window
    const opacity = (window.innerHeight - event.clientY) / window.innerHeight;
    $('img').css('opacity', opacity);
  });






});
