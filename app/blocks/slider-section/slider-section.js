app.sliderSection = {
  name: 'sliderSection',
  description: 'your script description',
  init() {
    document.querySelectorAll('.slider-section').forEach(section => {
      new Swiper(section.querySelector('.slider-section__slider'), {
        loop: true,
        slidesPerView: 2,
        speed: 1000,
        /* autoplay: {
          delay: 3000,
        }, */
        pagination: {
          el: section.querySelector('.swiper-pagination'),
          type: "progressbar",
        },
        navigation: {
          nextEl: section.querySelector('.swiper-button-next'),
          prevEl: section.querySelector('.swiper-button-prev'),
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
        },
        on: {
          slideChange: function () {
            new LazyLoad();
          },
        },
      });
    });
  },
};