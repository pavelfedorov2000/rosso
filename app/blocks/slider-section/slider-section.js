app.sliderSection = {
  name: 'sliderSection',
  description: 'your script description',
  init() {
    /* for (let i = 0; i < document.querySelectorAll('.slider-section').length; i++) {
      
    } */
    new Swiper('.slider-section__slider', {
      loop: true,
      slidesPerView: 3,
      //spaceBetween: 30,
      speed: 1000,
      /* autoplay: {
        delay: 3000,
      }, */
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: '.slider-section__slider-arrow--next',
        prevEl: '.slider-section__slider-arrow--prev',
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