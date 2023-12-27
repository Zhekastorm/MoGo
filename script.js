$(function (){
    var header = $("#header")
    var nav__link = $(".nav__link")
    var scrollPrev = 0

    $(window).scroll(function (){
        var scrolled = $(window).scrollTop()

        if (scrolled > 100 && scrolled > scrollPrev){
            header.addClass('hidden')
        } else {
            header.removeClass('hidden')
        }
        scrollPrev = scrolled;
    });


    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var elemId = $(this).data('scroll');
        var elemOffset = $(elemId).offset().top;

        document.getElementById("check__menu").checked = false;

        $("html, body").animate({
            scrollTop: elemOffset - 45
        }, 3000);


    });

    $("[scroll]").on("click", function (event){
        event.preventDefault();

        $("html, body").animate({
            scrollTop: - 2000
        }, 3000);
    });

    $("[data-collapse]").on("click", function (event){
        event.preventDefault();


        var $this = $(this),
            elemId = $this.data('collapse');

        $this.toggleClass("active")

    });


    var reviews__slider = $(".reviews__slider")
    reviews__slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        dots: true,
        arrows: false,
    });

})


