$(function ()
{
	var navRight = $("nav.right");
	var navBottom = $("nav.bottom");
	var navTop = $("nav.top");
	var img = $("img");
	var t;

	$(window).on("touchmove", function ()
	{
		navRight.addClass("active");
		img.addClass("hidden");

		if ($(window).scrollTop() > 1758)
		{
			navBottom.addClass("active");
			navTop.addClass("active");
		}
		else
		{
			navTop.removeClass("active");
			navBottom.removeClass("active");
		}
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
		if (this.className == "bottom") i = 1700;

		$("html, body").animate(
		{
			scrollTop: i
		}, 600);
	});
});
