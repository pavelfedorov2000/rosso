app.asideFilters = {
    name: 'asideFilters',
    description: 'your script description',
    init() {
        $('.aside-filters__item-title').not('.aside-filters__item-title--no-drop').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        });

        $('.aside-filters__price-range').slider({
            animate: 'slow',
            range: true,
            create: function (event, ui) {
                $(this).slider("option", "min", $(this).data('price-min'));
                $(this).slider("option", "max", $(this).data('price-max'));
                $(this).slider("option", "values", [$(this).data('price-from'), $(this).data('price-to')]);
                $(this).next().find('.aside-filters__price-value--min').text(`${$(this).data('price-from')} ₽`);
                $(this).next().find('.aside-filters__price-value--max').text(`${$(this).data('price-to')} ₽`);
            },
            slide: function (event, ui) {
                $(this).next().find('.aside-filters__price-value--min').text(`${ui.values[0]} ₽`);
                $(this).next().find('.aside-filters__price-value--max').text(`${ui.values[1]} ₽`);
            },
            stop: function (event, ui) {
                //$(this).prev().find('input.products-filters__value-input--min').trigger('change');
                //$(this).prev().find('input.products-filters__value-input--max').trigger('change');
            }
        });

        $('.catalog-filters__btn').on('click', function () {
            $('.aside-filters').addClass('active');
            $('body').addClass('_lock');
        });
        $('.aside-filters__title').on('click', function () {
            $('.aside-filters').removeClass('active');
            $('body').removeClass('_lock');
        });
    },
};
