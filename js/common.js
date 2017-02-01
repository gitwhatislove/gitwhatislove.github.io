function dropLinks(click, toggleClass)  {
	$(click).toggleClass(toggleClass);
}

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

	myMap.behaviors.disable("multiTouch"); 
	myMap.behaviors.disable("drag");

	myPlacemark0 = new ymaps.Placemark([mapSetting.markerX,mapSetting.markerY], {
		balloonContent: "" 
		}, {
		iconImageHref: "img/map-marker.png", 
		iconImageSize: [27, 35], 
		iconImageOffset: [0, 0], 
		balloonContentSize: [27, 35], 
		balloonLayout: "default#imageWithContent", 
		balloonImageHref: "img/ballon1.png", 
		balloonImageOffset: [0, 0], 
		balloonImageSize: [27, 35], 
		balloonShadow: false
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
		$(this).selectmenu();
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
	$(".js-tabs-content").find(".js_tab_item").each(function() {
		if( $(this).data("tab-container") != clickTab ){
			$(this).addClass("hidden");
		}
		else {
			$(this).removeClass("hidden");
		}
	});
}

function openModal(what, close, oh1, oh2) {
	if (what == ".js_modal_mobile_open") {
		$(what).find(".success_submit").addClass("hidden");
		$(what).find(".form_fields").removeClass("hidden");
	}
	$(close).removeClass("menu_mobile-close");
	$(what).toggleClass("menu_mobile-close");
	$("body").removeClass(oh2);
	$("body").toggleClass(oh1);
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

//script init draggable sliderUI
	$(".ui-state-default").draggable();
//script init sliderUi
	initSlidersUi();
//script init selectUi
	initSelectUi();

//script swich tabs
	$(".js_tab").on("click", function() {
		tabs.call(this);
	});

//srcript open/close menu
	$(".js-menu-open").on("click", function() {
		openModal(".js_menu_mobile_open", ".js_modal_mobile_open", "overflow-hidden-2","overflow-hidden-1"); 
		// dropLinks("#header__menu", "header__menu-white");
	});

	$(".js_form_order").on("click", function() {
		openModal(".js_modal_mobile_open", ".js_menu_mobile_open", "overflow-hidden-1","overflow-hidden-2");
	});

//srcript open modal advantages 
	$(".js-modal_advantages").on("click", function() {
		var clickModal = $(this).data("modal-advantages");
		$(".js-modal-advantages-content").find(".js_modal-advantages_open").each(function() {
			if( $(this).data("modal-advantages-content") == clickModal ){
				$(this).toggleClass("menu_mobile-close");
				$("body").toggleClass("overflow-hidden");
			}
		});
	});


//scripts open/close dropdown text
	$("#transport").on("click", function() {
		$("#transport-open").slideToggle("slow");
		$(this).find(".read-other").toggleClass("read-other__svg");
	});
	$("#auto").on("click", function() {
		$("#auto-open").slideToggle("slow");
		$(this).find(".read-other").toggleClass("read-other__svg");
	});
	$("#work_list").on("click", function() {
		$("#work_list-open").slideToggle("slow");
		$(this).find(".read-other").toggleClass("read-other__svg");
	});
	$("#js-title-kedr-menu").on("click", function() {
		dropLinks("#js-title-kedr-content", "links_quarter-drop-open");
	});

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
						$($form).find(".success_submit").removeClass("hidden");
						$($form).find(".form_fields").addClass("hidden");
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

		lightGallery(d);
	});


});
