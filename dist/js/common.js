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

	// Owl-Carousel

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop: true,
		items: 1,
		margin: 10,
		nav: false,
		dotsContainer: ".carousel-dots"
	});

	$('.next').click(function() {
		owl.trigger('next.owl.carousel');
	});

	$('.prev').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel');
	})

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

	// Troubles = Solutions

	// Troubles

	$('.problem1').hover(
		function() {
			$('.solutions').addClass('display-none');
			$('.problem1-description').addClass('visible');
		},
		function() {
			$('.solutions').removeClass('display-none');
			$('.problem1-description').removeClass('visible');
		});

	$('.problem2').hover(
		function() {
			$('.solutions').addClass('display-none');
			$('.problem2-description').addClass('visible');
		},
		function() {
			$('.solutions').removeClass('display-none');
			$('.problem2-description').removeClass('visible');
		});

	$('.problem3').hover(
		function() {
			$('.solutions').addClass('display-none');
			$('.problem3-description').addClass('visible');
		},
		function() {
			$('.solutions').removeClass('display-none');
			$('.problem3-description').removeClass('visible');
		});

	$('.problem4').hover(
		function() {
			$('.solutions').addClass('display-none');
			$('.problem4-description').addClass('visible');
		},
		function() {
			$('.solutions').removeClass('display-none');
			$('.problem4-description').removeClass('visible');
		});

	$('.problem5').hover(
		function() {
			$('.solutions').addClass('display-none');
			$('.problem5-description').addClass('visible');
		},
		function() {
			$('.solutions').removeClass('display-none');
			$('.problem5-description').removeClass('visible');
		});

	$('.problem6').hover(
		function() {
			$('.solutions').addClass('display-none');
			$('.problem6-description').addClass('visible');
		},
		function() {
			$('.solutions').removeClass('display-none');
			$('.problem6-description').removeClass('visible');
		});

	// Solutions

	$('.solution1').hover(
		function() {
			$('.problems').addClass('display-none');
			$('.solution1-description').addClass('visible');
		},
		function() {
			$('.problems').removeClass('display-none');
			$('.solution1-description').removeClass('visible');
		});

	$('.solution2').hover(
		function() {
			$('.problems').addClass('display-none');
			$('.solution2-description').addClass('visible');
		},
		function() {
			$('.problems').removeClass('display-none');
			$('.solution2-description').removeClass('visible');
		});

	$('.solution3').hover(
		function() {
			$('.problems').addClass('display-none');
			$('.solution3-description').addClass('visible');
		},
		function() {
			$('.problems').removeClass('display-none');
			$('.solution3-description').removeClass('visible');
		});

	$('.solution4').hover(
		function() {
			$('.problems').addClass('display-none');
			$('.solution4-description').addClass('visible');
		},
		function() {
			$('.problems').removeClass('display-none');
			$('.solution4-description').removeClass('visible');
		});

	$('.solution5').hover(
		function() {
			$('.problems').addClass('display-none');
			$('.solution5-description').addClass('visible');
		},
		function() {
			$('.problems').removeClass('display-none');
			$('.solution5-description').removeClass('visible');
		});

	$('.solution6').hover(
		function() {
			$('.problems').addClass('display-none');
			$('.solution6-description').addClass('visible');
		},
		function() {
			$('.problems').removeClass('display-none');
			$('.solution6-description').removeClass('visible');
		});

});
