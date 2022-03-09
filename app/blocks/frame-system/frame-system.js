app.frameSystem = {
    name: 'frameSystem',
    description: 'your script description',
    init() {
        new Swiper('.frame-system-slider', {
            loop: true,
            //preloadImages: false,
            //lazy: true,
            slidesPerView: 1,
            //spaceBetween: 30,
            speed: 1000,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.frame-system__arrow--next',
                prevEl: '.frame-system__arrow--prev',
            },
            /* breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 4,
                }
            }, */
            on: {
                slideChange: function () {
                    new LazyLoad();
                },
            },
        });
    },
};
