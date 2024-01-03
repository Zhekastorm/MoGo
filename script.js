$(function (){
    var header = $("#header")
    var nav__link = $(".nav__link")
    var scrollPrev = 0


    // Header__fixed
    $(window).scroll(function (){
        var scrolled = $(window).scrollTop()

        if (scrolled > 100 && scrolled > scrollPrev){
            header.addClass('hidden')
        } else {
            header.removeClass('hidden')
        }
        scrollPrev = scrolled;
    });


    // Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var elemId = $(this).data('scroll');
        var elemOffset = $(elemId).offset().top;
        
        document.getElementById("check__menu").checked = false;
        header.removeClass('hidden');

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


    // Accordion
    $("[data-collapse]").on("click", function (event){
        event.preventDefault();


        var $this = $(this),
            elemId = $this.data('collapse');

        $this.toggleClass("active")

    });


    // Slider
    var reviews__slider = $(".reviews__slider")
    reviews__slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        dots: true,
        arrows: false,
    });


    //  Active__links
    window.addEventListener('scroll', function (){
        var scrollH = window.scrollY;

        document.querySelectorAll('.section').forEach((el, i) =>{
            if (el.offsetTop - document.querySelector(".main__menu").clientHeight <= scrollH){
                document.querySelectorAll(".main__menu a").forEach((el) =>{
                    if (el.classList.contains('active')){
                        el.classList.remove('active')
                    }
                });
                console.log(i)
                if (i != 0){
                    document.querySelectorAll('a')[i].classList.add('active')
                }
            }
            
        });
    });

})


