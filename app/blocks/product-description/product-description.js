app.productDescr = {
  name: 'productDescr',
  description: 'your script description',
  init() {
    $('.product-description__item-title').on('click', function () {
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    });
  },
};
