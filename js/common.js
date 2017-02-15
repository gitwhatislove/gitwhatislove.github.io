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

	// myMap.behaviors.disable("multiTouch"); 
	// myMap.behaviors.disable("drag");

	myPlacemark0 = new ymaps.Placemark([mapSetting.markerX,mapSetting.markerY], {
		balloonContent: "" 
		}, {
		iconImageHref: "img/map-marker.png", 
		iconImageSize: [27, 35], 
		iconImageOffset: [0, 0]
		// balloonContentSize: [27, 35], 
		// balloonLayout: "default#imageWithContent", 
		// balloonImageHref: "img/map-marker.png", 
		// balloonImageOffset: [0, 0], 
		// balloonImageSize: [27, 35], 
		// balloonShadow: false
	}); 
	myMap.geoObjects.add(myPlacemark0);
}

function initSlidersUi() {
	$(".js_ui_slider").each(function () {
		var slider = $(this).find(".js_ui_slider_main");
		var sliderSetting = {};
		sliderSetting.max = $(this).data("max");
		sliderSetting.min = $(this).data("min");
		sliderSetting.step = $(this).data("step");
		sliderSetting.defaultValueTo = $(this).data("default-value-to");
		sliderSetting.defaultValueFrom = $(this).data("default-value-from");
		sliderSetting.labelTo = $(this).find(".js_ui_slider_label");
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
				$(sliderSetting.inputHidden).text( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
				$(sliderSetting.inputHiddenTop).val(ui.values[ 1 ]);
				$(sliderSetting.inputHiddenBottom).val(ui.values[ 0 ]);
			}
		});
		$(sliderSetting.inputHidden).text( sliderSetting.defaultValueTo + " - " + sliderSetting.defaultValueFrom );
		$(sliderSetting.inputHiddenTop).val(sliderSetting.defaultValueFrom);
		$(sliderSetting.inputHiddenBottom).val(sliderSetting.defaultValueTo);
	});
}

function resetFilter() {
	var form = $("form");
	if (form.length) {
		form.each(function() {
			$(this).trigger("reset");
		});
	}	
	$(".js_ui_slider").each(function () {
		var slider = $(this).find(".js_ui_slider_main");
		var sliderSetting = {};
		sliderSetting.defaultValueTo = $(this).data("default-value-to");
		sliderSetting.defaultValueFrom = $(this).data("default-value-from");
		sliderSetting.labelTo = $(this).find(".js_ui_slider_label");
		sliderSetting.inputHidden = $(this).find(".js_ui_slider_input");
		sliderSetting.inputHiddenTop = $(this).find(".js_ui_slider_value_top");
		sliderSetting.inputHiddenBottom = $(this).find(".js_ui_slider_value_bottom");
		$(sliderSetting.inputHidden).text( sliderSetting.defaultValueTo + " - " + sliderSetting.defaultValueFrom );
		$(sliderSetting.inputHiddenTop).val(sliderSetting.defaultValueFrom);
		$(sliderSetting.inputHiddenBottom).val(sliderSetting.defaultValueTo);
		slider.slider("values",[sliderSetting.defaultValueTo, sliderSetting.defaultValueFrom]);
	});
}

function initSelectUi() {
	$(".selectUi").each(function () {
		$(this).multipleSelect({
			selectAll: false,
			selectAllText: true,
			allSelected: false,
			placeholder: 'Выберите пункт'
		});
	});
}

function initSliderSlick() { 
	$(".slider-init").slick({
		dots: true,
		arrows: true,
		prevArrow: "<button type='button' class='slider_arrow slider_arrow-pre'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z'/></svg></button>",
		nextArrow: "<button type='button' class='slider_arrow slider_arrow-next'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z'/></svg></button>",
		responsive: [
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]		
	});
	//init slick double slider
	$(".slider-init-2_1").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		asNavFor: ".slider-init-2_2",
		prevArrow: "<button type='button' class='slider_arrow slider_arrow-pre'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z'/></svg></button>",
		nextArrow: "<button type='button' class='slider_arrow slider_arrow-next'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z'/></svg></button>",
	});
	$(".slider-init-2_2").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: ".slider-init-2_1",
		dots: false,
		arrows: false,
		focusOnSelect: true,
		fade: true,
		swipe: false
	});
}

function tabs() {
	var clickTab = $(this).data("tab");
	$(".js_tab").each(function() {
		var switchClass1 = $(this).data("add"),
			switchClass2 = $(this).data("remove");
		if( $(this).data("tab") == clickTab ){
			$(this).addClass(switchClass1);
			$(this).removeClass(switchClass2);
		}
		else {
			$(this).removeClass(switchClass1);
			$(this).addClass(switchClass2);
		}
	});
	var currTab = $(".js-tabs-content").find("[data-tab-container=" + clickTab + "]") 
	currTab.removeClass("hidden").siblings().addClass("hidden");
	currTab.find('.slider-init').slick('setPosition');
}


function chars() {
	$(".chars").on("keypress", function(key){
		if((key.charCode < 40 || key.charCode > 41) && (key.charCode < 48 || key.charCode > 57) && (key.charCode != 45) && (key.charCode != 32) && (key.charCode != 43) && (key.charCode != 0))
			return false;
	});
} chars();

$(document).ready(function() {

//init slick slider
	initSliderSlick();

//init draggable sliderUI
	$(".ui-state-default").draggable();
//init sliderUi
	initSlidersUi();
//init selectUi
	initSelectUi();

//swich tabs
	$(".js_tab").on("click", function() {
		tabs.call(this);
	});

//sopen/close menu
	$(".js-menu-open").on("click", function() {
		$(".js_menu_mobile_open").fadeIn(250);
		$("body").addClass("modal-open");
	});
	$(".js-menu-close").on("click", function() {
		$(".js_modal_mobile_open").fadeOut(250);
		$(".js_menu_mobile_open").fadeOut(250);
		$("body").removeClass("modal-open");
	});

	$(".js_form_order-open").on("click", function() {
		$(".js_modal_mobile_open").fadeIn(250);
		$("body").addClass("modal-open");
	});
	$(".js_form_order-close").on("click", function() {
		$(".js_modal_mobile_open").fadeOut(250);
		$(".js_menu_mobile_open").fadeOut(250);
		$("body").removeClass("modal-open");
		setTimeout(function() {
			$(".js_submit_form").find(".js_success_submit").fadeOut("fast");
			$(".js_submit_form").find(".js_form_fields").fadeIn("fast");	
		}, 1000)
	});

//srcript open modal advantages 
	$(".js-modal_advantages-open").on("click", function() {
		var clickModal = $(this).data("modal-advantages"),
		top = window.scrollY;
		window.__prevScroll = top;
		$(".js-modal-advantages-content").find(".js_modal-advantages-item-open").each(function() {
			if( $(this).data("modal-advantages-content") == clickModal ){
				$(this).fadeIn("fast");
				$(this).find(".js_modal-advantages-item-open-slow").fadeIn(250);
				$("body").addClass("modal-open");
				$("body").css("top",-top + 'px');
			}
		});
	});
	$(".js-modal_advantages-close").on("click", function() {
		var clickModal = $(this).data("modal-advantages");
		$(".js-modal-advantages-content").find(".js_modal-advantages-item-open").each(function() {
			if( $(this).data("modal-advantages-content") == clickModal ){
				$(this).fadeOut(250);
				$(this).find(".js_modal-advantages-item-open-slow").fadeOut("fast");
				$("body").removeClass("modal-open");
				window.scroll(0, window.__prevScroll);
			}
		});
	});
	$(".js_modal-advantages-item-open").on("click", function(e) {
		if (!$(e.target).closest(".js_modal-advantages-item-open-slow").length) {
			$("body").removeClass("modal-open");
			$('.js_modal-advantages-item-open').fadeOut("fast");
			window.scroll(0, window.__prevScroll);
		}
	});
	


//scripts open/close dropdown text
	var setTimeoutOpasity = 0;
	$("#work_list").on("click", function() {
		$("#work_list-open").slideToggle(250);
		$(this).find(".read-other").toggleClass("read-other__svg");
		function opasity() { 
			$('#work_list-open').prev().find('.js-last-grad').toggleClass('last-grad');
			if (setTimeoutOpasity == 0) setTimeoutOpasity = 260;
			else setTimeoutOpasity = 0;
		}
		setTimeout(opasity, setTimeoutOpasity);
	});

	$('.js-drop').each(function() {
		$(this).on("click", function() {
			$(this).siblings(".js-drop-content").slideToggle(250)
		});
	})

	$(".js-form-reset").on("click", function() {
		resetFilter();
	});
	

//init map
	if ($("#map").length > 0) ymaps.ready(initYandexMap);
	
//form
	var form_valid = $(".js_submit_form");
	if (form_valid.length) {
		form_valid.each(function() {
			var form_this  = $(this);
			$.validate({
				form: form_this, 
				borderColorOnError: true,
				scrollToTopOnError: false, 
				onSuccess: function($form) {
						$($form).find(".js_success_submit").fadeIn("fast");
						$($form).find(".js_form_fields").fadeOut("fast");
						$($form).trigger("reset");
					return false;
				}
			});
		});
	}

//init gallery
	var l = $(".lightgallery-custom");
	$(l).each(function() {
		var d = document.getElementById(this.id);
		lightGallery(d, {controls:true});
	});


});
