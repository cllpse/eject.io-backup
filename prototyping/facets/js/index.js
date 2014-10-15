$(function ()
{
	$("ul").each(function ()
	{
		var that = $(this);

		that.find("li").first().bind("click", function ()
		{
			that.toggleClass("open");
		});
	})

	var zipcode = $("#zipcode");

	$(".radio input").bind("click", function ()
	{
		console.log(this.id);

		if (this.id === "distancea")
		{
			zipcode.removeClass("active");
		}
		else
		{
			zipcode.addClass("active");
		}
	});
});
