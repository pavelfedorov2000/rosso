app.productReview = {
  name: 'productReview',
  description: 'your script description',
  init() {
    document.querySelectorAll('.product-review__rating').forEach(rating => {
      const rate = rating.getAttribute('data-rating');
      const stars = rating.querySelectorAll('.rating__item');
      for (let i = 0; i < rate; i++) {
        stars[i].classList.add('filled');
      }
    });
  },
};
