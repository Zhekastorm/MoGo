$(function (){
    var header = $("#header")
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
    
    // $("[data-scroll]").on("click", function(event) {
    //     event.preventDefault();

    //     var elemId = $(this).data('scroll');
    //     var elemOffset = $(elemId).offset().top;


    //     $("html, body").animate({
    //         scrollTop: elemOffset - 50
    //     }, 1000);
    // });

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


