$(document).ready(function() {

	var tab1 = $('#tab_1 > div');
	tab1.hide().filter(':first').show();
	var tab2 = $('#tab_2 > div');
	tab2.hide().filter(':first').show();

	$('#tab_1 ul li').click(tabSystem(tab1,'tab_1'));
	$('#tab_2 ul li').click(tabSystem(tab2,'tab_2'));
	
	function tabSystem(tab, tab_num) {
		return function() {
			$('#'+tab_num+' > ul > li').removeClass('fast_fix_bag');
			$('#'+tab_num+' > ul > li').removeClass('active');
			$(this.previousElementSibling).addClass('fast_fix_bag');
			$(this).addClass('active');
			tab.hide();
			var el = document.getElementById(this.id +'_');
			$(el).show();
		}
	}
});



