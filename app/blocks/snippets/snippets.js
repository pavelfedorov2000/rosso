app.yourScriptName = {
	name: 'snippets',
	description: 'js snippets',
	init() {
		// pageup
		document.querySelector('.page-up').addEventListener('click', () => {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});
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

		// ================== SWIPER ================= //
		const Slider = new Swiper('.slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 1000,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swper-button-prev',
				prevEl: '.swper-button-next',
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 4,
				}
			}
		});

		// ================ ICONS-SLIDER ============== //
		const iconsSlider = new Swiper('.icons-slider', {
			slidesPerView: 'auto',
			freeMode: true,
			//freeModeMomentum: true,
			//spaceBetween: 20,
		});

		// tabs
		//js
		const tabs = document.querySelectorAll('.tab');
		if (tabs.length > 0) {
			tabs.forEach(tab => {
				tab.addEventListener('click', () => {
					let activeTab = tab.getAttribute('data-tab');
					document.querySelectorAll('tabs-content').forEach(content => {
						content.classList.remove('tabs-content--active');
					});
					document.querySelector('.tab--active').classList.remove('tab--active');
					tab.classList.add('tab--active');
					document.getElementById(activeTab).classList.add('tabs-content--active');
				});
			});
		}
		//jquery
		$('.tab').on('click', function (e) {
			e.preventDefault();

			$($(this).siblings()).removeClass('tab--active');
			$('.tabs-content').removeClass('tabs-content--active');

			$(this).addClass('tab--active');
			$($(this).attr('href')).addClass('tabs-content--active');

			//$('.slider').slick('setPosition'); // Инициализация слайдера
		});

		$('.accordion__item-summary').on('click', function () {
			$(this).parent().siblings().removeClass('accordion__item--active');
			$(this).parent().siblings().find('div.accordion__item-details').slideUp('300');
			//$(this).parent().siblings().find('button.accordion__item-btn').attr('aria-label', 'Развернуть');
			$(this).parent().toggleClass('accordion__item--active');
			$(this).next().slideToggle('300');
			/* if ($(this).parent().hasClass('faq__item--active')) {
			    $(this).find('button.accordion__item-btn').attr('aria-label', 'Свернуть');
			} else {
			    $(this).find('button.accordion__item-btn').attr('aria-label', 'Развернуть');
			} */
		});

		// Custom select
		let selectItem = document.querySelector('.select');
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
		}

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

		// attach file
		$('input[type=file]').on('change', function () {
			let arrayFiles = this.files;
			$(this).parent().addClass('attached');
			$(this).next().hide();
			$(this).next().next().text(arrayFiles[0].name);
		});

		// validation
		$.validator.addMethod("minlenghtphone", function (value, element) {
			return value.replace(/\D+/g, '').length > 10;
		});
		$.validator.addMethod("requiredphone", function (value, element) {
			return value.replace(/\D+/g, '').length > 1;
		});


		function validateForms(form) {
			$(form).validate({
				rules: {
					name: "required",
					phone: {
						requiredphone: true,
						minlenghtphone: true,
					},
					email: "required",
					password: "required",
					repeat_password: {
						required: true,
						equalTo: "#reg_pass",
					}
				},
				submitHandler: function () {
					$.magnificPopup.open({
						items: {
							src: '#success',
						}
					});
				},
			});
		}

		validateForms('#order-popup form');
		validateForms('#product-card form');


		$('form').on('sumbit', function (e) {
			e.preventDefault();

			$.ajax({
				type: "POST",
				url: "send.php",
				data: $(this).serialize(),
			});
			$('.form__input').removeClass('valid');
			$(this).find("input").val("");
			$('form').trigger('reset');
			return false;
		});

		$.fn.setCursorPosition = function (pos) {
			if ($(this).get(0).setSelectionRange) {
				$(this).get(0).setSelectionRange(pos, pos);
			} else if ($(this).get(0).createTextRange) {
				var range = $(this).get(0).createTextRange();
				range.collapse(true);
				range.moveEnd('character', pos);
				range.moveStart('character', pos);
				range.select();
			}
		};

		//mask
		$("input[name=phone]").on('click', function () {
			$(this).setCursorPosition(4);
		}).mask("+7 (999) 999-99-99");


		$("a[href^='#']").not('.tab').on('click', function () {
			const href = $(this).attr("href");
			$("html, body").animate({
				scrollTop: $(href).offset().top + "px"
			});
			return false;
		});

		const minusBtn = document.querySelector('.minus-btn');
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
		}

		// ymaps
		ymaps.ready(init);

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
		}
	},
};
