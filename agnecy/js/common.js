$(function() {

	// Gallery
	$(".navigation ul li").click(function() {
		$(".navigation ul li").removeClass("click");
		$(this).addClass("click");
	});

	// Magnific-Popup
	$('.gallery').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {enabled: true}
		// other options
	});

	// Scroll Animation
	$(".item1, .item5").animated("bounceInLeft");
	$(".item2, .item3").animated("bounceInDown");
	$(".item6, .item7").animated("bounceInUp");
	$(".item4, .item8").animated("bounceInRight");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
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
