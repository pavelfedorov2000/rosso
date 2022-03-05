new LazyLoad();
//new WOW().init();
//app.burger.init();
//app.slider.init();
//app.menu.init();
//app.popup.init();
//app.validation.init();


// pageup
/* document.querySelector('.page-up').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}); */


//smoooth scroll to section
document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: document.getElementById(link.getAttribute('data-section')).offsetTop,
            behavior: "smooth"
        });
        body.classList.remove('_lock');
        burgerBtn.classList.remove('burger-btn--active');
        burgerMenu.classList.remove('burger-menu--active');
    });
});

// Custom jquery select
/* $('.select__title').on('click', function () {
    $(this).parents('.').siblings().find('.select__title').removeClass('select__title--active');
    $(this).parents('.').siblings().find('.select__content').slideUp('300');
    $(this).toggleClass('select__title--active');
    $(this).next().slideToggle('300');
});

$('.select__option').on('click', function () {
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().removeClass('select__title--active');
    $(this).parent().slideUp('300');
}); */

// Custom js select
/* let selectItem = document.querySelector('.select');
let selectTitle = selectItem.querySelector('.select__title');
let selectLabels = selectItem.querySelectorAll('.select__label');
// Toggle menu
selectTitle.addEventListener('click', () => {
    if ('active' === selectItem.getAttribute('data-state')) {
        selectItem.setAttribute('data-state', '');
    } else {
        selectItem.setAttribute('data-state', 'active');
    }
});
// Close when click to option
for (let i = 0; i < selectLabels.length; i++) {
    selectLabels[i].addEventListener('click', (e) => {
        selectTitle.textContent = e.target.textContent;
        selectItem.setAttribute('data-state', '');
    });
} */

// js counter +/-
/* const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');

if (minusBtn) {
    minusBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let input = this.nextElementSibling;
        let value = parseInt(input.value);
        while (value > 0) {
            value--;
            break;
        }
        input.value = value;
    });
}
if (plusBtn) {
    plusBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let input = this.previousElementSibling;
        let value = parseInt(input.value);
        value++;
        input.value = value;
    });
} */

// ymaps
/* ymaps.ready(init);

function init() {

    var myMap = new ymaps.Map("map", {
        center: [55.6938, 37.6001],
        zoom: 4,
        controls: ['zoomControl']
    });


    var myGeoObjects = [];

    myGeoObjects[0] = new ymaps.Placemark([55.755819, 37.617644], {
        clusterCaption: 'Заголовок',
        //balloonContentBody: 'Текст в балуне',
    }, {
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/pin.svg',
        // Размеры метки.
        iconImageSize: [45, 50],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-3, -42]
    });

    myGeoObjects[1] = new ymaps.Placemark([59.939099, 30.315877], {
        clusterCaption: 'Заголовок',
        //balloonContentBody: 'Текст в балуне',
    }, {
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/pin.svg',
        // Размеры метки.
        iconImageSize: [45, 50],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-23, -42]
    });

    myGeoObjects[2] = new ymaps.Placemark([45.035470, 38.975313], {
        clusterCaption: 'Заголовок',
        //balloonContentBody: 'Текст в балуне',
    }, {
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/pin.svg',
        // Размеры метки.
        iconImageSize: [45, 50],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-16, -42]
    });

    var clusterIcons = [{
        href: '/images/pointer.png',
        size: [31, 40],
        offset: [0, 0]
    }];

    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
        // Устанавливаем стандартный макет балуна кластера "Карусель".
        clusterBalloonContentLayout: 'cluster#balloonCarousel',
        // Устанавливаем собственный макет.
        //clusterBalloonItemContentLayout: customItemContentLayout,
        // Устанавливаем режим открытия балуна. 
        // В данном примере балун никогда не будет открываться в режиме панели.
        clusterBalloonPanelMaxMapArea: 0,
        // Устанавливаем размеры макета контента балуна (в пикселях).
        clusterBalloonContentLayoutWidth: 300,
        clusterBalloonContentLayoutHeight: 200,
        // Устанавливаем максимальное количество элементов в нижней панели на одной странице
        clusterBalloonPagerSize: 5
        // Настройка внешего вида нижней панели.
        // Режим marker рекомендуется использовать с небольшим количеством элементов.
        // clusterBalloonPagerType: 'marker',
        // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
        // clusterBalloonCycling: false,
        // Можно отключить отображение меню навигации.
        // clusterBalloonPagerVisible: false
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
} */