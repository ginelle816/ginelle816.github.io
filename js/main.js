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

// Get regular nav to come back after screen resize
// Note: can't get it to work after #dropdown is slid up
var windowWidth = $(window).width();
if (windowWidth > 500) {
	$('nav ul').show();
} else {
	$('nav ul').hide();
}




// Smooth scroll this mother!

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




// Form!

// Do it when someone submits the form
$('form').on('submit', function (e) {

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
		// Change button message temporarily
	    var that = this;
	    var text = $(this).html();
	    $('form button').html("Sending...");
	    setTimeout(function(){
	        //fade back
	        $(that).html(text);
	    }, 500);

		// Reset the form
		$('form').trigger('reset');
	}

	// If user starts typing in a field with .error, remove .error
	$(document).on('keyup', 'input.error,textarea.error', function(){
	   $(this).removeClass('error');
	});

});

// Validate form
$('form').validate({ // initialize the plugin
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true
        }
    }
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
