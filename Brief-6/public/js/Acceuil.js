//SLIDER WITH JQUERY

$(document).ready(function () {
    x = 0;

    //for next slide 
    $('.btn-next').click(function () {
        x = (x <= 300) ? (x + 100) : 0;
        $('figure').css('left', -x + "%")
    });
    $('.btn-prev').click(function () {
        x = (x >= 100) ? (x - 100) : 400;
        $('figure').css('left', -x + "%")
    });
})