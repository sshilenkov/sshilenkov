$(function() {

	// PopUp
	$(".popup-youtube").magnificPopup({
		type: 'iframe',

		iframe: {
		patterns: {
				youtube: {
					index: 'youtube.com/',

					id: 'v= null',

					src: 'https://www.youtube.com/embed/PZP3QmYKGGo'
				}
			}
		}
	});

// MMenu

	
	// $("#my-menu").mmenu({

	// });
	

	var $menu = $("#my-menu").mmenu({
		"slidingSubmenus": true,
		"extensions": [
			"fx-menu-zoom",
			"pagedim-black"
		]
	});
	var $icon = $("#my-icon");
	var API = $menu.data( "mmenu" );

	$icon.on( "click", function() {
		API.open();
	});

	API.bind( "open:finish", function() {
		setTimeout(function() {
			$icon.addClass( "is-active" );
		}, 10);
	});
	API.bind( "close:finish", function() {
		setTimeout(function() {
			$icon.removeClass( "is-active" );
		}, 10);
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".button").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Layers

	$('.icon1').hover(
		function() {
			$('.description1').addClass('active');
			$('.layer1').addClass('layer-active');
			$('.layer2').addClass('layer-passive');
			$('.layer3').addClass('layer-passive');
			$('.layer4').addClass('layer-passive');
		},
		function() {
			$('.layer1').removeClass('layer-active');
			$('.layer2').removeClass('layer-passive');
			$('.layer3').removeClass('layer-passive');
			$('.layer4').removeClass('layer-passive');
		});

	$('.icon2').hover(
		function() {
			$('.icon1').removeClass('is-active');
			$('.description1').removeClass('active');
			$('.description2').addClass('active');
			$('.layer1').addClass('layer-active');
			$('.layer2').addClass('layer-passive');
			$('.layer3').addClass('layer-passive');
			$('.layer4').addClass('layer-passive');
		},
		function() {
			$('.icon1').addClass('is-active');
			$('.description1').addClass('active');
			$('.description2').removeClass('active');
			$('.layer1').removeClass('layer-active');
			$('.layer2').removeClass('layer-passive');
			$('.layer3').removeClass('layer-passive');
			$('.layer4').removeClass('layer-passive');
		});

	$('.icon3').hover(
		function() {
			$('.icon1').removeClass('is-active');
			$('.description1').removeClass('active');
			$('.description3').addClass('active');
			$('.layer2').addClass('layer-active');
			$('.layer3').addClass('layer-passive');
			$('.layer4').addClass('layer-passive');
		},
		function() {
			$('.icon1').addClass('is-active');
			$('.description1').addClass('active');
			$('.description3').removeClass('active');
			$('.layer2').removeClass('layer-active');
			$('.layer3').removeClass('layer-passive');
			$('.layer4').removeClass('layer-passive');
		});

	$('.icon4').hover(
		function() {
			$('.icon1').removeClass('is-active');
			$('.description1').removeClass('active');
			$('.description4').addClass('active');
			$('.layer3').addClass('layer-active');
			$('.layer4').addClass('layer-active');
			$('.layer1').addClass('layer-passive');
			$('.layer5').addClass('layer5-passive');
		},
		function() {
			$('.icon1').addClass('is-active');
			$('.description1').addClass('active');
			$('.description4').removeClass('active');
			$('.layer3').removeClass('layer-active');
			$('.layer4').removeClass('layer-active');
			$('.layer1').removeClass('layer-passive');
			$('.layer5').removeClass('layer5-passive');
		});

	$('.icon5').hover(
		function() {
			$('.icon1').removeClass('is-active');
			$('.description1').removeClass('active');
			$('.description5').addClass('active');
			$('.layer5').addClass('layer5-active');
			$('.layer1').addClass('layer-passive');
			$('.layer2').addClass('layer-passive');
			$('.layer3').addClass('layer-passive');
			$('.layer4').addClass('layer-passive');
		},
		function() {
			$('.icon1').addClass('is-active');
			$('.description1').addClass('active');
			$('.description5').removeClass('active');
			$('.layer5').removeClass('layer5-active');
			$('.layer1').removeClass('layer-passive');
			$('.layer2').removeClass('layer-passive');
			$('.layer3').removeClass('layer-passive');
			$('.layer4').removeClass('layer-passive');
		});

});
