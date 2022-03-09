app.dropCatalog = {
    name: 'dropCatalog',
    description: 'your script description',
    init() {
        $('.js-catalog').on('click', function () {
            if ($(window).width() <= 1024) {
                $('.drop-catalog').addClass('active');
            } else {
                $('body').toggleClass('_lock');
                $('.drop-catalog').toggleClass('active');
            }
        });

        $('.js-catalog.burger-menu__title').on('click', function () {
            $('.burger-menu').removeClass('burger-menu--active');
            $('.drop-catalog').addClass('active');
            $('.js-drop-catalog-more').css('display', 'grid');
        });

        $('.js-drop-catalog-more').on('click', function () {
            $(this).fadeOut('300');
            $('.drop-catalog__item').css('display', 'grid');
            $('.drop-catalog__download').css('display', 'inline-grid');
        });
    },
};
