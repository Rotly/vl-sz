$(function () {
	$('.tabs__link-one').click(function () {
		$('.tabs__link-one').addClass('tabs__link-active');
		$('.tabs__link-two').removeClass('tabs__link-active');
		$('.tabs__link-one svg').addClass('active');
		$('.tabs__link-two svg').removeClass('active');

		$('.tabs__link-two .tabs__body-text').removeClass('tabs__active-text');
		$('.tabs__link-one .tabs__body-text').addClass('tabs__active-text');

		$('.tabs__pane-one').addClass('tabs__pane-active');
		$('.tabs__pane-two').removeClass('tabs__pane-active');

	});
});
$(function () {
	$('.tabs__link-two').click(function () {
		$('.tabs__link-two').addClass('tabs__link-active');
		$('.tabs__link-one').removeClass('tabs__link-active');
		$('.tabs__link-two svg').addClass('active');
		$('.tabs__link-one svg').removeClass('active');

		$('.tabs__link-two .tabs__body-text').addClass('tabs__active-text');
		$('.tabs__link-one .tabs__body-text').removeClass('tabs__active-text');
		

		$('.tabs__pane-two').addClass('tabs__pane-active');
		$('.tabs__pane-one').removeClass('tabs__pane-active');

	});
});






/*if desktop*/
if (window.matchMedia("(min-width: 620px)").matches) {

$(function () {
	$('.stories__block-banks').click(function () {
		$('.stories__block-banks').addClass('stories__block-active');
		$('.stories__block-bottle').removeClass('stories__block-active');
		$('.stories__block-butil').removeClass('stories__block-active');
		$('.banks').addClass('card-active');
		$('.bottle').removeClass('card-active');
		$('.butil').removeClass('card-active');
	});

	$('.stories__block-bottle').click(function () {
		$('.stories__block-banks').removeClass('stories__block-active');
		$('.stories__block-butil').removeClass('stories__block-active');
		$('.stories__block-bottle').addClass('stories__block-active');

		$('.banks').removeClass('card-active');
		$('.bottle').addClass('card-active');
		$('.butil').removeClass('card-active');

	});


	$('.stories__block-butil').click(function () {
		$('.stories__block-banks').removeClass('stories__block-active');
		$('.stories__block-butil').addClass('stories__block-active');
		$('.stories__block-bottle').removeClass('stories__block-active');

		$('.banks').removeClass('card-active');
		$('.bottle').removeClass('card-active');
		$('.butil').addClass('card-active');

	});

});

	$(document).ready(function () {
		var offset = $('.stories').offset();
		var topPadding = 0;
		$(window).scroll(function () {
			if ($(window).scrollTop() > offset.top) {
				$('.stories').addClass('sticky');
			}
			else {
				$('.stories').removeClass('sticky');
			}
		});
	});
} 
/*if mob */
else {
	$(document).ready(function () {
		var offset = $('.stories__dots').offset();
		var topPadding = 0;
		$(window).scroll(function () {
			if ($(window).scrollTop() > offset.top) {
				$('.stories__dots').addClass('sticky');
			}
			else {
				$('.stories__dots').removeClass('sticky');
			}
		});
	});
}
