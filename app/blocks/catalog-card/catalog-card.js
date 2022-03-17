app.catalogCard = {
  name: 'catalogCard',
  description: 'your script description',
  init() {
    $('.js-favorite-btn').on('click', function () {
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
        $(this).attr('aria-label', 'Убрать из избранного');
      } else {
        $(this).attr('aria-label', 'Добавить в избранное');
      }
    });
  },
};
