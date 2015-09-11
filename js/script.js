$(document).ready(function(){
	$('.bxslider').bxSlider({
		controls: false
	});
});


$(document).ready(function() {
	$(".video").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: true,
		closeClick	: true,
		openEffect	: 'elastic',
		closeEffect	: 'elastic'
	});
});



$(document).ready(function() {
	$(".op_men").click(function() {
		$(this).find("~ ul").stop().slideToggle()
	});
});

$(document).ready(function() {
	$(".sub_m1 > p").click(function() {
		$(this).find("~ ul").stop().slideToggle()
	});
});

$(document).ready(function() {
	$(".sub_m2 > p").click(function() {
		$(this).find("~ ul").stop().slideToggle()
	});
});