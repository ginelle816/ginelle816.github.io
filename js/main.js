// $('.grid-wrapper img').on('hover', function () {
//     $(this).html($("<span> HOVERING!!!!! </span>"));
// });




// $(document).ready(function() {
//     $('.grid-wrapper img').animate({
//         opacity:1

//     });

//     $('.grid-wrapper img').hover(function() {
//         $(this).stop().animate({opacity:.4},200);

//     }, function() {
//         $(this).stop().animate({opacity:1},500)

//     });

// });


 $('.overlay').hover(function () {
    $(this).toggleClass('overlay-hover');
 });

$('.hamburger').on('click', function (event) {
	// Slide toggle the menu (#dropdown)
	event.preventDefault();
    $('#dropdown').slideToggle(300);
    // Bonus: If the user clicks anywhere outside of the menu slide the menu up
});