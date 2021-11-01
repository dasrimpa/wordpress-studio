$(document).ready(function() {

    $(function() {
        var mySwiper = $('.swiper').swiper({
            mode: 'horizontal',
            watchActiveIndex: true,
            loop: true,
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            centeredSlides: false,
            paginationClickable: true,
            autoplay: 2000,
            spaceBetween: 35,
            onSlideChangeStart: function(swiper) {
                console.log('slide change start - before');
                console.log(swiper);
                console.log(swiper.activeIndex);

                //before Event use it for your purpose
            },
            onSlideChangeEnd: function(swiper) {
                console.log('slide change end - after');
                console.log(swiper);
                console.log(swiper.activeIndex);
                //after Event use it for your purpose
                if (swiper.activeIndex == 1) {
                    //First Slide is active
                    console.log('First slide active')
                }
            }
        });

    })

});