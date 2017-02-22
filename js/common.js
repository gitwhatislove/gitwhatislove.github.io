function initSlider() {
	$('.js-slider-init').slick({
		rows: 2,
		slidesToShow: 3,
		slidesToScroll: 1,
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
				slidesToScroll: 1
			}
		},{
			breakpoint: 700,
			settings: 'unslick'
		}
	  ]
	});
}
function initSliderVideo() {
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

function swichTabs() {
	$(this).addClass("active").siblings().removeClass("active");
	var currTab = $(".js-tabs-content").find("[data-tab-content='" + $(this).data("tab") + "']");
	currTab.fadeIn(250).siblings().fadeOut(0);
	currTab.slick('setPosition');
}

function shadowScroll(scrollContainer, scrolling, add) {
	if ($(scrolling).position().left < 0)  $(add).addClass('shadow_left');
	else $(add).removeClass('shadow_left');
	if ($(scrolling).position().left + $(scrolling).width() > $(scrollContainer).width()) $(add).addClass('shadow_right');
	else $(add).removeClass('shadow_right');
}

function initBurger() {
	// $('.js-burger').off('click.burger').on('click.burger', function() {
	$('.js-burger').on('click', function() {
		$('.js-burger-menu').removeClass('hidden');
		$('body').addClass('overflow-hidden');
		setTimeout( function() { $('#burger_menu').toggleClass('burger-animate') } , 100)
	});

	$('.js-burger-close').on('click', function() {
		setTimeout( function() { $('.js-burger-menu').addClass('hidden'); } , 500)
		$('body').removeClass('overflow-hidden');
		$('#burger_menu').toggleClass('burger-animate')
	});

	$('.js-burger-menu').on('click', function(e) {
		if (!$(e.target).closest("#burger_menu").length) {
			setTimeout( function() { $('.js-burger-menu').addClass('hidden'); } , 500)
			$('body').removeClass('overflow-hidden');
			$('#burger_menu').toggleClass('burger-animate')
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
	$('.js-menu-category').on( 'mouseover', function(e){
		var fade = 0;
		if (!globalFlags.menuFirstOpen) { fade = 500; globalFlags.menuFirstOpen = true;}
		else fade = 0;
		if ($(e.target).data('index') == undefined ) e.preventDefault();
		else {
			$('.js-menu-category-content').find("[data-index='" + $(e.target).data('index') + "']").fadeIn(fade).siblings().fadeOut(0);
		}
	});
	$('.js-menu-category').on( 'mouseleave', function(e){
		$('.js-menu-category-content-item').fadeOut(200);
	});
	
	
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

function initGlobalFlags() {
	globalFlags.menuFirstOpen = false;
}



var globalFlags = [];
initGlobalFlags();


$( document ).ready(function() {
	

	if ($('.js-slider-init').length) initSlider();
	if ($('.js-slider-init-video').length) initSliderVideo();

	if ($('.js-scroll-content').length) {
		shadowScroll('.js-scroll-container', '.js-scroll-content', '.js-scroll-opasity');
		$('.js-scroll-container').on( 'scroll', function(){
			shadowScroll('.js-scroll-container', '.js-scroll-content', '.js-scroll-opasity');
		});
		$(window).on( 'resize', function(){
			shadowScroll('.js-scroll-container', '.js-scroll-content' , '.js-scroll-opasity');
		});
	}

	$('.js-tabs-categories li').on('click', function() {
		swichTabs.call(this);
	});
	
	
	initBurger();
	initPopup();
	initForm();
	initMenu();
	initSearch();


	// добавить стили классу
	// console.log(document.styleSheets[0].rules[260]);
	// console.log(document.styleSheets[0].rules[260].media);
	// for( var i = 0; i < document.styleSheets[0].rules.length; i++ ) {
	// 	if (document.styleSheets[0].rules[i].conditionText == '(max-width: 1330px)') {
	// 		var k;
	// 	}
	// }




});