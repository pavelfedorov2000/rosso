app.yourScriptName = {
    name: 'snippets',
    description: 'js snippets',
    init() {

        // popups
        //jquery
        $('.open-popup').on('click', function () {
            $('body').addClass('_lock');
            $('.overlay').fadeIn('slow');
            $(`#${$(this).data('popup')}-popup`).fadeIn('slow');
        });
        $('.popup__close').on('click', function () {
            $('body').removeClass('_lock');
            $('.overlay').fadeOut('slow');
            $(this).parent().fadeIn('slow');
        });

        //js
        const overlay = document.querySelector('.overlay');
        const openPopup = document.querySelectorAll('.open-popup');
        const popup = document.querySelector('#popup');
        const thanksPopup = document.querySelector('#thanks');
        const popupClose = document.querySelectorAll('.popup__close');
        openPopup.addEventListener('click', function () {
            body.classList.add('_lock');
            overlay.style.display = 'block';
            document.getElementById(this.getAttribute('data-popup')).style.display = 'block';
        });
        popupClose.forEach(close => {
            close.addEventListener('click', () => {
                overlay.style.display = 'none';
                close.parentElement.style.display = 'none';
                body.classList.remove('_lock');
            });
        });
        document.querySelectorAll('.popup').forEach(popup => {
            let popupForm = popup.querySelector('form');
            popupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                popupForm.querySelectorAll('input').forEach(input => {
                    input.value = '';
                });
                popupForm.parentElement.style.display = 'none';
                thanksPopup.style.display = 'block';
            });
        });
        // magnific
        $('.open-video').magnificPopup({
            type: 'iframe',
            preloader: false,
        });


        $('.popup-link').magnificPopup({
            type: 'inline' // к попапу добавить класс mfp-hide // Через кнопку data-mfp-src="#call_me" добавить кнопке
        });

        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded',
            }
        });

        const searchForm = document.querySelector('.search-form');
        const searchInput = searchForm.querySelector('.search-form__input');
        const searchBtn = document.querySelector('.header__search-btn');
        searchBtn.addEventListener('click', function () {
            searchForm.classList.add('search-form--active');
        });

        document.addEventListener('mouseup', (e) => {
            if (searchForm != e.target && searchInput != e.target) {
                searchForm.classList.remove('search-form--active');
            }
        });
    },
};
