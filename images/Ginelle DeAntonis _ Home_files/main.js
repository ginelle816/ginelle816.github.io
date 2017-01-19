// Fade in everything on page load
$(document).ready(function() {
    $('#main-content').fadeIn(1500);
});




// Image descriptions!

// Do it when someone hovers over an image with class of .overlay
 $('.overlay').hover(function (e) {
 	// prevent the standard link operation on hover
 	e.preventDefault();
 	// Toggle the overlay effect (.overlay-hover)
    $(this).toggleClass('overlay-hover');
 });




// Hamburger!

// Do it when someone clicks on the hamburger icon
$('.hamburger').on('click', function (e) {
	// prevent the standard link operation on click
	e.preventDefault();
	// Slide toggle the menu (#dropdown)
    $('#dropdown').slideToggle(300);
    // Bonus: If the user clicks anywhere outside of the menu slide the menu up
});




// Smooth scroll this mother!

// Do it when someone clicks a nav link
$('nav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});




// Form!

// Do it when someone submits the form
$('form').on('submit', function (e) {
	// Prevent the page from refreshing
	e.preventDefault();

	var fullName = $('#nameInput').val();

	var email = $('#emailInput').val();

	var message = $('#messageInput').val();
	
	// If name is blank show. error, if not remove .error
	if (fullName === "") {
		$('#nameInput').addClass('error');
	} else {
		$('#nameInput').removeClass('error');
	}

	// If email is blank show. error, if not remove .error
	if (email === "") {
		$('#emailInput').addClass('error');
	} else {
		$('#emailInput').removeClass('error');
	}

	// If message is blank show. error, if not remove .error
	if (message === "") {
		$('#messageInput').addClass('error');
	} else {
		$('#messageInput').removeClass('error');
	}

	// If all fields are filled
	if (fullName === "",email === "",message === "") {

	} else {
		// Change button message on submit
	    var that = this;
	    var text = $(this).html();
	    $('form button').html("&#x2713; You're all set!");
	    setTimeout(function(){
	        //fade back
	        $(that).html(text);
	    }, 5000);
		// $('form button').html("&#x2713; You're all set!");
		// Reset the form
		$('form').trigger('reset');
	}

	// If user starts typing in a field with .error, remove .error
	$(document).on('keyup', 'input.error,textarea.error', function(){
	    $(this).removeClass('error');
	});

});




// KONAMI!

var kkeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);
    
    // Add your own easter egg here!!
    $('.grid-wrapper img').addClass('img-effect');

  }
});
