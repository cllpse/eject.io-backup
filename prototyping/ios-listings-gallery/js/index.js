$(function ()
{
	var navRight = $("nav.right");
	var img = $("img");
	var t;

	$(window).on("touchmove", function ()
	{
		navRight.addClass("active");
		img.addClass("hidden");
	});

	$("main").on("click", function ()
	{
		navRight.removeClass("active");
	});

	$("a").on("click", function (e)
	{
		e.preventDefault();

		var i = 0;

		if (this.className == "top") i = 0;
		if (this.className == "middle") i = 719;
		if (this.className == "bottom") i = 0;

		$("html, body").animate(
		{
			scrollTop: i
		}, 600);
	});
});
