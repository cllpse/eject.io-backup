$(function ()
{
	$("a[href*=#]:not([href=#])").click(function ()
	{
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname)
		{
			var target = $(this.hash);

			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			
			if (target.length)
			{
				$("html, body").animate(
				{
					scrollTop: target.offset().top - 60
				}, 600);

				return false;
			}
		}
	});
});


/* $(function ()
{
	var div = $(".result div").draggable(
	{
		containment: "parent",
		axis: "x",
		handle: "a",

		drag: function(event, ui)
		{
			div.css("background-position", 600 - ui.position.left + "px top"); 
		}
	});

	div.find("a").on("click", function (e)
	{
		e.preventDefault();
	});

	div.parent().on(
	{
		mouseenter: function ()
		{
			if (div.css("left") != "0px") return;

			div.animate({ "left": 10, "background-position": 590 }, 100);
		},

		mouseleave: function ()
		{
			if (div.css("left") != "10px") return;

			div.animate({ "left": 0, "background-position": 600 }, 100);
		}
	});
}); */


$(function ()
{
	var div = $(".result div").draggable(
	{
		containment: "parent",
		axis: "x",
		handle: "a",

		drag: function(event, ui)
		{
			div.css("background-position", 676 - 60 - ui.position.left + "px top"); 
		}
	});

	div.find("a").on("click", function (e)
	{
		e.preventDefault();
	});

	div.parent().on(
	{
		mouseenter: function ()
		{
			if (div.css("left") != "556px") return;

			div.animate({ "left": 526, "background-position": 90 }, 100);
		},

		mouseleave: function ()
		{
			if (div.css("left") != "526px") return;

			div.animate({ "left": 556, "background-position": 60 }, 200);
		}
	});

	div.css(
	{
		"left": 556,
		"background-position": 60
	});
});


$(function ()
{
	var toggleElement = function (element)
	{
		console.log(element);

		if (element.hasClass("display-block"))
		{
			element.removeClass("opacity-on");
		
			setTimeout(function ()
			{
				element.removeClass("display-block");
			}, 300);
		}
		else
		{
			element.addClass("display-block");
		
			setTimeout(function ()
			{
				element.addClass("opacity-on");
			}, 100);
		}
	}

	var owl = $(".examples .owl");

	var owlCarousel = $(".owl-carousel", owl).owlCarousel(
	{
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});

	$("menu a", owl).on("click", function (e)
	{
		e.preventDefault();

		toggleElement(owl);
	});

	$(".examples .preview-enlarge").on("click", function (e)
	{
		e.preventDefault();

		var href = this.href;
		var n = href.substr(href.lastIndexOf("#") + 1);

		toggleElement(owl);

		owlCarousel.trigger("owl.jumpTo", n);
	});
});


$(function ()
{
	$(".magnifier").each(function ()
	{
		var magnifier = $(this);		
		var magnifierImage = magnifier.parent().find("img");


		var imageFullDimensions = (function ()
		{
			var i = new Image();

			i.src = magnifierImage.attr("src");

			return {
				width: i.width,
				height: i.height
			};
		}());


		if (magnifierImage.data().altSrc)
		{
			magnifier.css("background", "url('" + magnifierImage.data().altSrc + "') no-repeat #fff");
		}
		else
		{
			// magnifier.css("background", "url('" + magnifierImage.attr("src") + "') no-repeat #3ce6b8");			
			magnifier.css("background", "url('" + magnifierImage.attr("src") + "') no-repeat #fff");			
		}


		$(window).on("mousemove", function (e)
		{
			var magnifierImageOffset = magnifierImage.offset();
			var mx = e.pageX - magnifierImageOffset.left;
			var my = e.pageY - magnifierImageOffset.top;

			// if (mx < (magnifierImage.width() - 20) && my < (magnifierImage.height() - 20) && mx > 441 && my > 20)
			if (mx < (magnifierImage.width() - 5) && my < (magnifierImage.height() - 5) && mx > 5 && my > 5)
			{
				magnifier.fadeIn(100);
			}
			else
			{
				magnifier.fadeOut(100);
			}

			if (magnifier.is(":visible"))
			{
				var magnifierWidth = magnifier.width();	
				var magnifierHeight = magnifier.height();

				var px = mx - magnifierWidth / 2;
				var py = my - magnifierHeight / 2;

				var rx = -1 * Math.round(mx / magnifierImage.width()  * imageFullDimensions.width  - magnifierWidth / 2);
				var ry = -1 * Math.round(my / magnifierImage.height() * imageFullDimensions.height - magnifierHeight / 2);
				
				var bgp = rx + "px " + ry + "px";

				magnifier.css({ left: px, top: py, backgroundPosition: bgp });
			}
		});
	});
});