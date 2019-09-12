(function($) {
  console.log('testing');

  $('.main-carousel').flickity({
    // options
    wrapAround: true,
  });

  let index = $('.container-carousel').length;
  let i;
  for (i=0; i<index; i++ ){
    $('#workspace-carousel-'+i).flickity({
      // options
      cellAlign: 'center',
      contain: true,
      wrapAround: false,
    });
  }

  //  Function for open and close the amp community in front page
  $('.button-arrow-amp-community').on('click', function(){
    $('.front-page-amp-community-logos').toggleClass('is-open');
    $('.front-page-button-arrow').toggleClass('turn-arrow');
  });
  // end of amp community function from front pageXOffset


  //Function to open and close the pop up for the Book a Tour

  const $bookButton = $('.button-book');
  const $bookForm = $('.book-tour-form'); // TODO add form class here
  const $bookIsOn = $('.book-is-on'); //TODO add class of form book a tour when is on
  const $bookCloseX = $('.close-book-tour'); //TODO add class for the X to close the book a tour pop up

  $bookButton.on('click', function(){
    event.preventDefault();
    $bookForm.addClass($bookIsOn);

  });

  $bookCloseX.on('click', function(){
    event.preventDefault();
    $bookForm.removeClass($bookIsOn);
  });

  // end of function for book a tour button


  $('.button-arrow').on('click', function(event) {
    event.preventDefault();

    const $href = $(event.currentTarget).attr('data-scrollto'); // value = #goto
    console.log($($href).offset().top);
    console.log('test');
    $('body,html').animate({
      scrollTop: $($href).offset().top
    });
  });




})(jQuery);
