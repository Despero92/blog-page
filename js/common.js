$(document).ready(function() {
    var menu = $("#nav ul"),
        hamburger = $("#hamburger");
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        menu.slideToggle();
        return false;
    });
    $(window).resize( function(){
        var w = $(window).width();
        if( w > 767 && menu.is(':hidden') ){
            menu.removeAttr('style');
        }
    });
    var arrow = document.getElementById("arrow_up");
    $( arrow ).hide();
    $( function () {
        $(window).scroll( function () {
            if($(this).scrollTop() > 500){
                $( arrow ).fadeIn();
            }else{
                $( arrow ).fadeOut();
            }
        })
        $( arrow ).click( function () {
            $("body,html").animate({
                scrollTop: 0
            },800);
            return false;
        });
    })
});
$(document).ready( function () {
    $('#carousel-clients').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $("#carousel-clients .owl-prev").empty().append("<i class=\"fa fa-angle-left fa-2x\" aria-hidden=\"true\"></i>");
    $("#carousel-clients .owl-next").empty().append("<i class=\"fa fa-angle-right fa-2x\" aria-hidden=\"true\"></i>");
});
$(document).ready(function(){

});

