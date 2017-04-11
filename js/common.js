function initYandexMap(){   
	var mapSetting = {};
	mapSetting.centerX = $("#map").data("center-x");
	mapSetting.centerY = $("#map").data("center-y");
	mapSetting.zoom = $("#map").data("zoom");
	mapSetting.markerX = $("#map").data("marker-x");
	mapSetting.markerY = $("#map").data("marker-y");
	var myMap;
	myMap = new ymaps.Map("map", {
		center: [mapSetting.centerX,mapSetting.centerY],
		zoom: mapSetting.zoom
	});
	myMap.controls.add('zoomControl', { top: 10, left: 5 });

	myPlacemark0 = new ymaps.Placemark([mapSetting.markerX,mapSetting.markerY], {
		balloonContent: "" 
		}, {
		iconImageHref: "img/map-marker.png", 
		iconImageSize: [27, 35], 
		iconImageOffset: [0, 0]
	}); 
	myMap.geoObjects.add(myPlacemark0);
}

function initSliderMain() {
	function slickInit() {
		$('.js-slider-init').slick({
			rows: 2,
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: false,
			arrows: true,
			prevArrow: "<button type='button' class='slider_arrow slider_arrow-pre'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z'/></svg></button>",
			nextArrow: "<button type='button' class='slider_arrow slider_arrow-next'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z'/></svg></button>",
			responsive: [
			{
				breakpoint: 1150,
				settings: {
					rows: 3,
					slidesToShow: 2,
					slidesToScroll: 3
				}
			},{
				breakpoint: 700,
				settings: 'unslick'
			}
		  ]
		});
	}
	slickInit();
	var resize = false;
	function resizeSlick(self) {
		if (($(self).width() <= 700)) {
			resize = true;
		}
		
		if (($(self).width() > 700)&&(resize)) {
			slickInit();
			resize = false;
		}
	}
	resizeSlick(window);
	$(window).on('resize', function(){
		resizeSlick(this);
	})

	

}
function initSliderVideo() {
	function slickInit() {
		$('.js-slider-init-video').slick({
			slidesToShow: 3,
			slidesToScroll: 2,
			dots: false,
			arrows: true,
			variableWidth: true,
			infinite: true,
			prevArrow: "<button type='button' class='slider_arrow slider_arrow-pre'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z'/></svg></button>",
			nextArrow: "<button type='button' class='slider_arrow slider_arrow-next'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z'/></svg></button>",
			responsive: [
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},{
				breakpoint: 700,
				settings: 'unslick'
			}
		  ]
		});
	}
	slickInit();
	var resize = false;
	function resizeSlick(self) {
		if (($(self).width() <= 700)) {
			resize = true;
		}
		
		if (($(self).width() > 700)&&(resize)) {
			slickInit();
			resize = false;
		}
	}
	resizeSlick(window);
	$(window).on('resize', function(){
		resizeSlick(this);
	})
}

function initScrollbar(tag) {
	$(tag).perfectScrollbar();
}

function initSliderCustom() {
	initSliderGallery('.js-slider-init-gallery', '.js-slider-gallery-preview', '.js-open-gallery', '.js-open-gallery-modal', '.js-close-gallery-modal' )
	// initSliderGallery('.js-slider-init-certificate', '.js-slider-certificate-preview', '.js-open-certificate', '.js-open-certificate-modal', '.js-close-certificate-modal' )
	initSliderGallery('.js-slider-init-youtube', '.js-slider-youtube-preview', '.js-open-youtube', '.js-open-youtube-modal', '.js-close-youtube-modal' )
	
	function initSliderGallery(init, preview, open, openContent, close) {
		function scrollTopCustom() {
			var activeSlide = $(init).find('.slick-active').data('gallery');
			var __scrollEl = $(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").position().top;
			var __scrollElHeight = $(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").height();
			var __scrollCont = $(preview).height();
			
			if (__scrollEl > __scrollCont)  { 
				var __scrollTop = $(preview).scrollTop();
				$(preview).scrollTop(__scrollTop +__scrollEl - __scrollCont + __scrollElHeight);
				$(preview).perfectScrollbar('update');
			}
			if (__scrollEl < 0) {
				var __scrollTop = $(preview).scrollTop();
				$(preview).scrollTop(__scrollTop + __scrollEl);
				$(preview).perfectScrollbar('update');
			}
		}
		if (init != '.js-slider-init-youtube') {
			$(init).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				infinite: false,
				prevArrow: "<button type='button' class='slider_arrow slider_arrow-pre'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z'/></svg></button>",
				nextArrow: "<button type='button' class='slider_arrow slider_arrow-next'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z'/></svg></button>",
			});

			var __p = preview + ' .wrapp-img';

			$(__p).on('click', function(e) {
				console.log('111',e);
				var activeSlide = $(this).data('gallery');
				$(init).slick('slickGoTo', activeSlide-1);
				$(preview).find(".img-content").removeClass('active');
				$(this).find('.img-content').addClass('active');
			})

			$(open).on('click', function(e){
				$('body').addClass('overflow-hidden');
				// console.log('123',$(e.target).closest('.gallery_foto').data('gallery-open'));
				var openContentData = $('.js-wrapp-foto-gallery').find("[data-gallery-modal='" + $(e.target).closest('.js-gallery-foto').data('gallery-open') + "']")
				var openContentDataSlider = openContentData.find('.js-slider-init-gallery');
				$(openContentData).fadeIn(1000);
				$(openContentData).fadeIn({
					duration: 1000,
					complete: function(){
						initScrollbar(preview);
					}
				});
				var activeSlide = $(this).data('gallery');
				$(init).slick('setPosition');
				$(init).slick('slickGoTo', activeSlide-1);
				$(preview).find(".img-content").removeClass('active');
				$(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").addClass('active');
				$(openContentDataSlider).find('.slider_arrow').on('click', function() {
					var activeSlide = $(openContentDataSlider).find('.slick-active').data('gallery');
					$(preview).find(".img-content").removeClass('active');
					$(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").addClass('active');
					console.log(preview);
					console.log(activeSlide);
					scrollTopCustom();
				})
				$(openContentDataSlider).on('swipe', function(event, slick, direction){
					var activeSlide = $(openContentDataSlider).find('.slick-active').data('gallery');
					$(preview).find(".img-content").removeClass('active');
					$(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").addClass('active');
					scrollTopCustom();
				});
			})
			$(close).on('click', function(){
				$(openContent).fadeOut(500);
				$('body').removeClass('overflow-hidden');
			})
			$(openContent).on('click', function(e) {
				if (!$(e.target).closest('.gallery').length) {
					$(openContent).fadeOut(500);
					$('body').removeClass('overflow-hidden');
				}
			});
		}
		else {
			$(open).on('click', function(){
				$('body').addClass('overflow-hidden');
				$(openContent).fadeIn(1000);
				$(openContent).fadeIn({
					duration: 1000,
					complete: function(){
						initScrollbar(preview);
					}
				});
				var activeSlide = $(this).data('gallery');
				$(preview).find(".img-content").removeClass('active');
				$(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").addClass('active');
				$(init).find("[data-gallery='" + activeSlide + "']").fadeIn(0).siblings().fadeOut(0);
			})
			var __p = preview + ' .wrapp-img';
			$(__p).on('click', function(e) {
				var activeSlide = $(this).data('gallery');
				$(preview).find(".img-content").removeClass('active');
				$(this).find('.img-content').addClass('active');
				$(init).find("[data-gallery='" + activeSlide + "']").fadeIn(0).siblings().fadeOut(0);
			})
			$(close).on('click', function(){
				$(openContent).fadeOut(500);
				$('body').removeClass('overflow-hidden');
				var activeSlide = 'video' + $(preview).find('.active').parent().data('gallery');
				// player = new YT.Player(activeSlide);
				// player.pauseVideo();
			})
			$(openContent).on('click', function(e) {
				if (!$(e.target).closest('.gallery').length) {
					$(openContent).fadeOut(500);
					$('body').removeClass('overflow-hidden');
				}
			});
		}
		
	}

}
function initSliderOne() {
	$('.js-slider-init-one-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: "<button type='button' class='slider_arrow slider_arrow-pre'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z'/></svg></button>",
		nextArrow: "<button type='button' class='slider_arrow slider_arrow-next'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z'/></svg></button>",
	});
}

function swichTabs() {
	// .js-tabs-categories-flex
	$(this).addClass("active").siblings().removeClass("active");
	var currTab = $(".js-tabs-content").find("[data-tab-content='" + $(this).data("tab") + "']");
	// currTab.removeClass('hidden').siblings().addClass('hidden');
	if ($(this).parent().hasClass('js-tabs-categories-flex')) {
		currTab.fadeIn(300).css("display","flex");
	}
	else currTab.fadeIn(300)
	
	currTab.siblings().fadeOut(0);
	if (currTab.hasClass('js-slider-init')) {
		currTab.slick('setPosition');
	}
	
}

function shadowScroll(scrollContainer, scrolling, add) {
	if ($(scrolling).position().left < 0)  $(add).addClass('shadow_left');
	else $(add).removeClass('shadow_left');
	if ($(scrolling).position().left + $(scrolling).width() > $(scrollContainer).width()) $(add).addClass('shadow_right');
	else $(add).removeClass('shadow_right');
}

function initBurger() {
	$('.js-burger').on('click', function() {
		$('.js-burger-menu').fadeIn(300);
		$('body').addClass('overflow-hidden');
		setTimeout( function() { $('#burger_menu').toggleClass('burger-animate') } , 100)
	});

	$('.js-burger-close').on('click', function() {
		console.log('222');
		setTimeout( function() { $('.js-burger-menu').fadeOut(200) } , 100)
		$('body').removeClass('overflow-hidden');
		$('#burger_menu').toggleClass('burger-animate')
	});

	$('.js-burger-menu').on('click', function(e) {
		console.log('333');
		if (!$(e.target).closest("#burger_menu").length) {
			setTimeout( function() { $('.js-burger-menu').fadeOut(200) } , 100)
			$('body').removeClass('overflow-hidden');
			$('#burger_menu').toggleClass('burger-animate');
		}
	});
}

function initForm() {
	$('.js-form input').on( "focusout", function() {
		if(this.value.length != 0) {
			$(this).addClass('input-border-bottom-value');
		}
		else $(this).removeClass('input-border-bottom-value');
	})
	$('.js-form .input-wrapp input').on( "focusout", function() {
		if(this.value.length != 0) {
			$(this).addClass('input-border-bottom-value');
		}
		else $(this).removeClass('input-border-bottom-value');
	})
}

function initPopup() {
	$('.js-popup-open').on('click', function () {
		var __h = '.js-'+$(this).data('open-popup');
		$('.js-popup').fadeIn(250);
		$(__h).fadeIn(250).siblings().fadeOut(250);
		$('body').addClass('overflow-hidden');
	})

	$('.js-popup-close').on('click', function() {
		var __h = '.js-'+$(this).data('close-popup');
		$(__h).fadeOut(250);
		$('.js-popup').fadeOut(250);
		$('body').removeClass('overflow-hidden');
		resetForm($('.js-popup').find('.js-form'));
	});

	$('.js-popup').on('click', function(e) {
		if (!$(e.target).closest('.wrapp_popup_window').length) {
			$('.js-popup').fadeOut(250);
			$('body').removeClass('overflow-hidden');
			resetForm($('.js-popup').find('.js-form'));
		}
	});

}

function initMenu() {
	var clearSetTimeout;
	var menuDelay = 200;
	$('.js-menu-category .menu_categories li a').on( 'mouseover', function(e){
		var __self = this;
		var _e = e;
		clearSetTimeout = setTimeout(function() { 
			var fade = 0;
			if (!globalSetting.menuFirstOpen) { fade = 300; globalSetting.menuFirstOpen = true; menuDelay = 0; }
			else fade = 0;
			if ($(__self).data('index') == undefined ) _e.preventDefault();
			else {
				//находим нужную вкладку
				var thisTab = $('.js-menu-category-content').find("[data-index='" + $(__self).data('index') + "']")
				var thisTabActivIndex = $('.js-menu-category').find('.menu_categories').find('.active').data('index');
				var thisTabActiv= $('.js-menu-category-content').find("[data-index='" + thisTabActivIndex + "']")

				//добавление активного пункта меню
				$('.js-menu-category').find('.menu_categories').children().find('a').removeClass('active').addClass('no-active');
				$(__self).addClass('active').removeClass('no-active');
				
				//показываем ее и скрываем остальные
				if (thisTabActivIndex == undefined) {
					thisTab.slideToggle(fade);
				}

				thisTabActiv.slideUp({
					duration: 0,
					complete: function(){
						thisTab.slideToggle(0);
					}
				});
				
				
				// thisTab.slideToggle(fade).siblings().slideToggle(0);
				thisTab.find('.js-menu-hover').children().first().addClass('active').siblings().removeClass('active');
				thisTab.find('.wrapp_content').css("display","none");
				thisTab.find('.wrapp_content').first().css("display","inline-block");
			}
		}, menuDelay);
		
	});

	$('.js-menu-category .menu_categories li a').on( 'mouseleave', function(e){
		clearTimeout(clearSetTimeout);
		globalSetting.menuFirstOpen = false;
		
		
	});

	$('.js-menu-category').on( 'mouseleave', function(e){
		clearTimeout(clearSetTimeout);
		menuDelay = 200;
		$('.js-menu-category-content-item').fadeOut(0);
		$('.js-menu-category').find('.menu_categories').children().find('a').removeClass('active').removeClass('no-active');

	});

	//ховеры на табы слева
	$('.js-left-menu-hover').on('mouseenter', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.js-menu-category-content-item').find('.wrapp_content').css("display","none");
		$('.js-menu-category-content-item').find("[data-tab-content='" + $(this).data('tab') + "']").css("display","inline-block");
	});

	// ховеры на пункты меню
	$('.js-menu-item-hover .menu-center ul li a').on('mouseenter', function(){
		$('.js-menu-item-hover').find('.menu-center').find('ul').children().find('a').addClass('no-active');
		$(this).addClass('active').removeClass('no-active');
	})
	$('.js-menu-item-hover').on('mouseleave', function(){ 
		$('.js-menu-item-hover').find('.menu-center').find('ul').children().find('a').removeClass('no-active');
	})

}

function initSearch() {
	$('.js-search-open').on('click', function() {
		$('.js-search').fadeIn(250);
		$('body').addClass('overflow-hidden');
	});
	$('.js-search-close').on('click', function() {
		$('.js-search').fadeOut(250);
		$('body').removeClass('overflow-hidden');
		resetForm($('.js-search').find('.js-form'));
	});
}

function resetForm(form) {
	$(form).trigger("reset");
	$(form).find('input').removeClass('input-border-bottom-value');
}

function initSlider() {
	if ($('.js-slider-init').length) initSliderMain();
	if ($('.js-slider-init-one-slide').length) initSliderOne();
	if ($('.js-slider-init-video').length) initSliderVideo();
	if ($('.js-slider-init-gallery').length) initSliderCustom();
}

function initFilters() {
	$('body').on('click', function(e) {
		if (!$(e.target).closest(".block-filters").length) {
			if (!$(e.target).closest(".item-filter-content").length) {
				$(".js-item-filter").next().fadeOut(200);
				$(".item-filter-other").fadeOut(200);
				$(".js-item-filter-inMenu").next().fadeOut(200);
			}
			
		}
	});
	$(".js-item-filter").on("click", function(e) {
		if ($(this).next().is(":visible")) {
			$(this).next().fadeOut(200);
			return false;
		}
		$(".js-item-filter-menu").next().fadeOut(100);
		$(".js-item-filter-inMenu").next().fadeOut(100)
		$(".js-item-filter").next().fadeOut(100);
		$(this).next().fadeIn(200);
	});

	$(".js-item-filter-menu").on("click", function() {
		$(".js-item-filter").next().fadeOut(100)
		$(this).next().fadeToggle(200);
	});

	$(".js-item-filter-inMenu").on("click", function() {
		if ($(this).next().is(":visible")) { $(this).next().fadeOut(200);  return false;}
		$(".js-item-filter").next().fadeOut(100)
		$(".js-item-filter-inMenu").next().fadeOut(100)
		$(this).next().fadeIn(200);
	});

	$('.js-chechbox').each(function () {
		var textFilter  = [];
		var chechbox = $(this).find('label');
		var defaultText = $(this).find('.fild-filter').text();
		var __self = $(this);
		$(chechbox).each(function () {
			$(this).on('click', function() {
				var __clickSelf = $(this);
				if (!$(this).prev().prop("checked")) {
					textFilter.push($(this).text());
				}
				else {
					textFilter = textFilter.filter(function(el) {
						return el != __clickSelf.text();
					});
				}
				if (textFilter.length > 0) {
					var result = textFilter.reduce(function(sum, current) {
						return sum + ', ' + current ;
					}, 0);
					__self.find('.fild-filter').text(result.split(', ').splice(1,result.length).join(', '));
					__self.find('.js-close').removeClass('hidden');
				}
				else  {
					__self.find('.fild-filter').text(defaultText);
					__self.find('.js-close').addClass('hidden');
				}
			})
		});
		$(this).find('.js-close').on('click', function() {
			__self.find('.fild-filter').text(defaultText);
			__self.find('form')[0].reset();
			textFilter  = [];
			$(this).addClass('hidden')
		});
	});
}

function initSlidersUi() {
	$(".js_ui_slider").each(function () {
		var slider = $(this).find(".js_ui_slider_main");
		var sliderSetting = {};
		sliderSetting.max = $(this).data("max");
		sliderSetting.min = $(this).data("min");
		sliderSetting.step = $(this).data("step");
		sliderSetting.defaultValueTo = '0'+ $(this).data("default-value-to") +'.00';
		sliderSetting.defaultValueFrom = $(this).data("default-value-from") +'.00';

		
		
		sliderSetting.inputShowFildFilterTop = $(this).closest('.item-filter').find('.js-fild-filter-slider').find('.js_ui_slider_value_bottom');
		sliderSetting.inputShowFildFilterBottom = $(this).closest('.item-filter').find('.js-fild-filter-slider').find('.js_ui_slider_value_top');

		// sliderSetting.labelTo = $(this).find(".js_ui_slider_label");
		sliderSetting.inputHidden = $(this).find(".js_ui_slider_input");
		sliderSetting.inputHiddenTop = $(this).find(".js_ui_slider_value_top");
		sliderSetting.inputHiddenBottom = $(this).find(".js_ui_slider_value_bottom");
		slider.slider({
			range: true,
			min: sliderSetting.min,
			max: sliderSetting.max,
			step: sliderSetting.step,
			values: [ sliderSetting.defaultValueTo, sliderSetting.defaultValueFrom ],
			slide: function( event, ui ) {
				// $(sliderSetting.inputHidden).text( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
				var __timeDown = '';
				if (ui.values[ 0 ] < 10) {
					var __timeDown = '0'+ ui.values[ 0 ]+'.00'
				}
				else {
					var __timeDown = ui.values[ 0 ]+'.00'
				}

				if (ui.values[ 1 ] < 10) {
					var __timeUp = '0'+ui.values[ 1 ]+'.00'
				}
				else {
					var __timeUp = ui.values[ 1 ]+'.00'
				}

				$(sliderSetting.inputShowFildFilterTop).val(__timeDown);
				$(sliderSetting.inputShowFildFilterBottom).val(__timeUp);
				$(sliderSetting.inputHiddenTop).val(__timeUp);
				$(sliderSetting.inputHiddenBottom).val(__timeDown);
				
			}
		});
		$(sliderSetting.inputHidden).text( sliderSetting.defaultValueTo + " - " + sliderSetting.defaultValueFrom );
		$(sliderSetting.inputShowFildFilterTop).val(sliderSetting.defaultValueTo);
		$(sliderSetting.inputShowFildFilterBottom).val(sliderSetting.defaultValueFrom);
		$(sliderSetting.inputHiddenTop).val(sliderSetting.defaultValueFrom);
		$(sliderSetting.inputHiddenBottom).val(sliderSetting.defaultValueTo);
	});
}

function initSticky() {
	$(window).scroll(function () {
		var offsetS = $('#sticky').offset().top;
		var scrollTop = $(this).scrollTop(),
		    h = $(this).height(),
		    offset = $('#end').offset().top;
		    footer_h = $('#end').height();
		if (offset - scrollTop + 300 <= h) {
			$('#sticky').css({'position' : 'absolute', 'top': offset - footer_h - 150});
		}
		if (offset - scrollTop + 300 > h) {
			if ($(this).scrollTop() >= 700) {
				$('#sticky').css({'position' : 'fixed','top':'130px'});
			}
			else if ($(this).scrollTop() < 700) {
				$('#sticky').css({'position' : 'absolute','top':'750px'});
			}
		}
	})
}

function initShowOther() {
	$('.js-show-text').each(function() {
		var _click = $(this).find(".js-show-other")
		$(_click).on("click", function() {
			$(this).prev().find('.js-show-other-content').slideToggle(350);
			if ($(this).text() != '- Скрыть') {
				$(this).text('- Скрыть')
			}
			else {
				var _text = $(this).data('text');
				$(this).text(_text); 
			}
		})
	});

}
function initDropShow () {
	$('.js-drop-open ').each(function() {
		$(this).on('click', function() {
			$(this).find('.js-drop-open-content').slideToggle(300);
			$(this).find('.down').toggleClass('up');
		})
	})
}

function initMenuOther() {
	$('.js-menu-dropdown').each(function() {
		var click = $(this).find('.js-menu-dropdown-open');
		var __this = this;
		$(click).on('click', function() {
			var clickLeft = $('.js-menu-dropdown-open').position().left - 20;
			$(this).find('.down').toggleClass('up');
			$('.js-menu-dropdown-dop').css({"left":clickLeft});
			$('.js-menu-dropdown-dop').slideToggle(300);
			return false;
		})

		$(window).on('resize', function(){
			var sizeMenu = $('.js-menu-dropdown').find('.main_menu').outerWidth(true);
			var sizeEl = 0;
			$('.js-menu-dropdown').find('.main_menu').children().each( function () {
				sizeEl = sizeEl + $(this).outerWidth(true);
			})
			var count = 0;
			sizeEl = sizeEl + 30;

			while(sizeMenu < sizeEl) {
				var col = $('.js-menu-dropdown').find('.main_menu').children()[$('.js-menu-dropdown').children().length-count-2];
				sizeEl = sizeEl - $(col).outerWidth(true);
				count++;
			}

			var countAll = $('.js-menu-dropdown').find('.main_menu').children().length;
			var colDel = countAll - count - 2;
			var addEl = [];

			$('.js-menu-dropdown').find('.main_menu').children().each( function (index) {
				if ((index > colDel)&&(count)) {
					$(this).fadeOut(0);
					addEl.push($(this));
				}
			})

			$('.js-menu-dropdown').find('.main_menu').children().last().fadeIn(0);

			for(var i = 0; i < addEl.length-1; i ++) {
				addEl[i].prependTo('.js-menu-dropdown-dop');
			}
			
			$('.js-menu-dropdown-dop').children().fadeIn(0);
			
		});
	})
}

function initReview() {
	$('.js-select-review').each(function() {
		$(this).on('click', function() {
			var __val = $(this).data('review');
			$('.js-review-input').val(__val);
			$(this).siblings().css({"background-image" : "url('img/star-y.png')"})
			$(this).nextAll().css({"background-image" : "url('img/star-g.png')"})
			$(this).css({"background-image" : "url('img/star-y.png')"});
		})
		$(this).on("mouseenter", function() {
			$(this).css({"background-image" : "url('img/star-y.png')"});
			$(this).prevAll().css({"background-image" : "url('img/star-y.png')"});
			$(this).nextAll().css({"background-image" : "url('img/star-g.png')"})
		})
	})
	
}

function initTagResize() {
	var size = 0;
	$('.js-tags-resize').children().each( function (){
		size = size + $(this).outerWidth(true);
	})
	if ($('.js-tags-resize').innerWidth() < size) {
		$('.js-tags-resize').append( "<li class='js-tags-show-all'>...</li>" );
		$('.js-tags-resize').append( "<li class='js-tags-hide'><img src='img/icons/back.png'></li>" );
	}

	hideTag();

	function hideTag() {
		var size = 0;
		$('.js-tags-resize').children().each( function (){
			size = size + $(this).outerWidth(true);
		})
		
		var count = 0;
		var countAll = $('.js-tags-resize').children().length;


		while ($('.js-tags-resize').innerWidth() < size) {
			var col = $('.js-tags-resize').children()[$('.js-tags-resize').children().length-count-3];
			size = size - $(col).outerWidth(true);
			count++;
		}

		var colDel = countAll - count - 3;
		$('.js-tags-resize').children().fadeIn(0);
		$('.js-tags-resize').children().each( function (index) {
			if ((index > colDel)&&(count)) {
				$(this).fadeOut(0);
			}
		})
		$('.js-tags-show-all').fadeIn(0);
		$('.js-tags-hide').fadeOut(0);
	}
	$('.js-tags-show-all').on('click', function() {
		$('.js-tags-resize').children().each( function () {
				$(this).fadeIn(0);
		})
		$('.js-tags-show-all').fadeOut(0);
		
	})
	$('.js-tags-hide').on('click', function() {
		$('.js-tags-hide').fadeOut(0);
		hideTag();
	})
	$(window).on('resize', function(){
		hideTag();
	});
}


function initLike() {
	$('.js-like').each(function() {
		$(this).attr( "data-like", '1');
		$(this).on('click', function() {
			if ($(this).attr('data-like') == '1') {
				$(this).find('img').attr( 'src', 'img/icons/heart-2.png' );
				$(this).attr( "data-like", '0');
				$(this).toggleClass('show');
			}
			else {
				$(this).find('img').attr( 'src', 'img/icons/heart1.png' );
				$(this).attr( "data-like", '1');
				$(this).toggleClass('show');
			}
			return false;
		})
	})
	$('.js-add-favorites').each(function() {
		$(this).attr( "data-like", '1');
		$(this).on('click', function() {
			if ($(this).attr('data-like') == '1') {
				$(this).find('img').attr( 'src', 'img/icons/heart-2.png' );
				$(this).attr( "data-like", '0');
			}
			else {
				$(this).find('img').attr( 'src', 'img/icons/heart1.png' );
				$(this).attr( "data-like", '1');
			}
			return false;
		})
		// $(this).on('mouseenter', function() {
		// 	// $(this).find('img').attr( 'src', 'img/icons/heart-2.png' );
		// })
		// $(this).on('mouseleave', function() {
		// 	if ($(this).attr('data-like') == '1') {
		// 		// $(this).find('img').attr( 'src', 'img/icons/heart1.png' );
		// 		// $(this).find('span').removeClass('span-noactive');
		// 	}
		// })
	})

	
}

function initFooterHover() {
	$('.footer-menu_categories li a').on('mouseenter', function() {
		$('.footer-menu_categories').find('li').find('a').removeClass('active').addClass('no-active');
		$(this).addClass('active').removeClass('no-active');
		
	})
	$('.footer-menu_categories').on('mouseleave', function() {
		$('.footer-menu_categories').find('li').find('a').removeClass('active').removeClass('no-active')
	})
	$('.footer-menu_main-info li a').on('mouseenter', function() {
		$('.footer-menu_main-info').find('li').find('a').removeClass('active').addClass('no-active');
		$(this).addClass('active').removeClass('no-active');
	})
	$('.footer-menu_main-info').on('mouseleave', function() {
		$('.footer-menu_main-info').find('li').find('a').removeClass('active').removeClass('no-active')
	})
}

function initInputMask() {
	if ($('.js-date-valid').length) {
		$('.js-date-valid').inputmask("date",{
			showMaskOnHover: false
		}); 
	}
	
}
function initAccordion() {
	$('.js-accordion-title').each(function () {
		$(this).next().addClass('hidden')
		$(this).on('click', function() {
			$(this).find('.close').toggleClass('hidden');
			$(this).next().slideToggle(300);
			if ($(this).find('.down')) {
				$(this).find('.down').toggleClass('up');
			}

		});
	})
	$('.js-reset-form').each(function () {
		$(this).on('click', function() {
			$(this).closest('.js-accordion-content').trigger("reset");;
		});
	})
}

function initScrollTo() {
	$('.js-scrollTo').each(function() {
		$(this).on('click', function() {
			var el = $(this).data('scroll');
			var elC = $('.js-scrollTo-content').filter(function() {
				return $(this).data('scroll') == el;
			})
			$(this).addClass('active').siblings().removeClass('active');
			$(window).scrollTo(elC, 800);
		})
	})
}

function initValidForm(){
	var form_valid = $(".js-form");
	if (form_valid.length) {
		form_valid.each(function() {
			var form_this  = $(this);
			$.validate({
				form: form_this, 
				borderColorOnError: true,
				scrollToTopOnError: false, 
				onSuccess: function($form) {
					if (!$form.parent().parent().hasClass('js-popup-sing-in')) 
						if ($form.hasClass('js-no-popup')) {
							$($form).trigger("reset");
						}
						else {
							$form.parent().parent().fadeOut().next().fadeIn();
						}
						
					return false;
				}
			});
		});
	}
}

function initHeader() {
	var _height = $('header').height();
	$(window).scroll(function() {
		if ($(window).scrollTop() >=_height+120) {
			$('header').addClass('fixedMenu');
			$('header').addClass('animetMenuIn');
			$('.wrapp_page').css({"padding-top":_height });
		}
		else  { 
			$('header').removeClass('fixedMenu');
			$('header').removeClass('animetMenuIn');
			$('.wrapp_page').removeClass('fixPaddingMenu');
			$('.wrapp_page').removeAttr('style');
		}
	})
}

function initChechAll() {
	var checkedAll = false;
	$('.js-chech-all').on('click', function() {
		if (!checkedAll) {
			$(this).prev().find('input').prop('checked', true);
			checkedAll = true;
		}
		else  { 
			$(this).prev().find('input').prop('checked', false); 
			checkedAll = false;
		}
	});
}
 
function initSetting() {
	globalSetting.menuFirstOpen = false;
	globalSetting.menuOtherDel1 = false;
}
var globalSetting = [];
initSetting();

$( document ).ready(function() {
	if ($('.js-scroll-content').length) {
		shadowScroll('.js-scroll-container', '.js-scroll-content', '.js-scroll-opasity');
		$('.js-scroll-container').on( 'scroll', function(){
			shadowScroll('.js-scroll-container', '.js-scroll-content', '.js-scroll-opasity');
		});
		$(window).on( 'resize', function(){
			shadowScroll('.js-scroll-container', '.js-scroll-content' , '.js-scroll-opasity');
		});
	}

	$('.js-tabs-categories li').each( function (){ 
		$(this).on('click', function() {
			swichTabs.call(this);
		});
	})
	
	
	initSlider();
	initBurger();
	initPopup();
	initForm();
	initMenu();
	initSearch();
	initFilters();
	initSlidersUi();
	if ($("#map").length > 0) ymaps.ready(initYandexMap);
	if ($("#sticky").length > 0 ) initSticky();
	initShowOther();
	initDropShow();
	initMenuOther();
	initReview();
	initTagResize();
	initLike();
	initFooterHover();
	initInputMask();
	initAccordion();
	initScrollTo();
	initValidForm();
	initHeader();
	initChechAll();

	// $('.js-add-favorites').each( function {
	// 	$(this).on('click', function() {
	// 		$(this).toggleClass('add-favorites-active')
	// 	});
	// })

	// добавить стили классу
	// console.log(document.styleSheets[0].rules[260]);
	// console.log(document.styleSheets[0].rules[260].media);
	// for( var i = 0; i < document.styleSheets[0].rules.length; i++ ) {
	// 	if (document.styleSheets[0].rules[i].conditionText == '(max-width: 1330px)') {
	// 		var k;
	// 	}
	// }




});