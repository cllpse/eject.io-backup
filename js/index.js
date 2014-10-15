$(function ()
{
	var w = $(window);
	var bio = $("header.bio").removeClass("opacity-zero");
	// var googleChrome = $("article.google-chrome").removeClass("opacity-zero");

	w.on("scroll", function ()
	{
		var scrollTop = w.scrollTop();

		bio.toggleClass("opacity-zero", scrollTop > 10);

		// googleChrome.toggleClass("opacity-zero", scrollTop + (window.innerHeight - (window.innerHeight / 5)) < googleChrome.position().top);
	});
});
