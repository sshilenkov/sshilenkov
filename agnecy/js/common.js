$(function() {

	// Gallery
	$(".navigation ul li").click(function() {
		$(".navigation ul li").removeClass("click");
		$(this).addClass("click");
		$(".collection, .cats, .dogs, .cavys, .girls").removeClass("show");
	});

	$(".navigation .all").click(function() {
		$(".collection").addClass("show");
	});

	$(".navigation .cat").click(function() {
		$(".cats").addClass("show");
	});

	$(".navigation .dog").click(function() {
		$(".dogs").addClass("show");
	});

	$(".navigation .cavy").click(function() {
		$(".cavys").addClass("show");
	});

	$(".navigation .girl").click(function() {
		$(".girls").addClass("show");
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
