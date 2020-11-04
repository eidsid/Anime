//add stick class for navbar
$(document).ready(function() {
    ddm = $('.dropdown-menu');

    navbar = $(".navbar");
    $(window).scroll(function() {
        Top = $(".section1").offset().top - window.innerHeight;
        if ($(window).scrollTop() > Top) {
            navbar.addClass("sticky");
            ddm.addClass('dropdown-menuscroll');
        } else {
            navbar.removeClass("sticky");
            ddm.removeClass('dropdown-menuscroll');

        }
    })




});


// Add smooth scrolling to all links
//start header area
$(document).ready(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
}); //end header area
// to return me to the top of the page
$(document).ready(function() {



    $('.scroll_To_Top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);

    });

})