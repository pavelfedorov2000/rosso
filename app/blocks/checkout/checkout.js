app.checkout = {
    name: 'checkout',
    description: 'your script description',
    init() {

        $('.checkout-step__hidden').each(function (i) {
            $(this).attr('data-delivery-option', $('.checkout-step__select option').eq(i).val());
            if ($(this).attr('data-delivery-option') !== null && $(this).attr('data-delivery-option') === $('.checkout-step__select option:selected').val()) {
                $(this).fadeIn('slow');
            }
        });

        $('.checkout-step__select').on('change', function () {
            var selectedIndex = $('.checkout-step__select option:selected').index();
            $('.checkout-step__hidden').hide();
            $('.checkout-step__hidden').eq(selectedIndex).fadeIn('slow');
        });
    },
};
