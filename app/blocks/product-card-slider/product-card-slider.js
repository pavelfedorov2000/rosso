app.productCardSlider = {
  name: 'productCardSlider',
  description: 'your script description',
  init() {
    const productCardThumbs = new Swiper(".product-thumbs-slider", {
      loop: true,
      spaceBetween: 15,
      direction: "vertical",
      slidesPerView: 4,
      freeMode: true,
      //watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".product-card__thumbs-arrow--next",
        prevEl: ".product-card__thumbs-arrow--prev",
      },
      breakpoints: {
        768: {
          spaceBetween: 16,
        },
        1025: {
          spaceBetween: 20,
        },
        1367: {
          spaceBetween: 30,
        }
      },
      on: {
        slideChange: function () {
          new LazyLoad();
        },
      },
    });

    new Swiper(".product-card-slider", {
      loop: true,
      spaceBetween: 20,
      //effect: 'fade',
      thumbs: {
        swiper: productCardThumbs,
      },
      on: {
        slideChange: function () {
          new LazyLoad();
        },
      },
    });
  },
};
