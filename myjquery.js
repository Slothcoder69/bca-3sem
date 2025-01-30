$(document).ready(function() {
    $(".arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1300); // Duration of the scroll in milliseconds
    });
});
