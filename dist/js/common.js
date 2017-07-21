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

});
