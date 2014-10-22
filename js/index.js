$(function ()
{
	var w = $(window);
	var bio = $("header.bio").removeClass("opacity-zero");
	// var googleChrome = $("article.google-chrome").removeClass("opacity-zero");
	// var rocket = $("#rocket");
	// var rocketPosition = rocket.position();
	// var rocketClone = rocket.css("visibility", "hidden").clone();

	// rocketClone.css({ "position": "absolute", "visibility": "visible", "top": rocketPosition.top, "left": "50%" }).insertAfter(rocket);

	w.on("scroll", function ()
	{
		var scrollTop = w.scrollTop();

		bio.toggleClass("opacity-zero", scrollTop > 10);

		// googleChrome.toggleClass("opacity-zero", scrollTop + (window.innerHeight - (window.innerHeight / 5)) < googleChrome.position().top);

		// rocketClone.toggleClass("eject-eject", scrollTop > 700);
	});
});
