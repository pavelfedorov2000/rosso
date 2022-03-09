app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {

        // jquery
        $('.burger-btn').on('click', function () {
            if ($('.drop-catalog').hasClass('active')) {
                $('body').removeClass('_lock');
                $('.drop-catalog').removeClass('active');
                $('.js-drop-catalog-more').fadeOut('300');
            } else {
                $('body').toggleClass('_lock');
                $('.burger-menu').toggleClass('burger-menu--active');
            }
        });
    },
};
