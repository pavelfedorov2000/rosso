app.colorSolutions = {
    name: 'colorSolutions',
    description: 'your script description',
    init() {
        $('.color-solution__title').on('click', function () {
            $(this).parent().siblings().find('.color-solution__title').removeClass('active');
            $(this).parent().siblings().find('.color-solution__title').next().slideUp();
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        });

        //$('.execution-img').attr('src', $src);

        $('.execution-options__item input[type=radio]').on('change', function () {
            var $src = $(this).next().find('img').attr('src');
            var $srcset = $src.split('.')[0].split('/');
            var $srcset_num = $srcset[$srcset.length - 1].split();
            $srcset_num.push('.webp');
            $srcset.splice($srcset.length - 1, 1, $srcset_num.join(''));
            if ($(this).is(':checked')) {
                $('.execution-img source').attr('srcset', $src);
                $('.execution-img img').attr('src', $src);
            }
        });
    },
};
