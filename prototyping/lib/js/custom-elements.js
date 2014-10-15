document.register("p-template",
{
	prototype: Object.create
	(
		HTMLElement.prototype,
		{
			createdCallback: {
				value: function ()
				{
					$(this).load(this.attributes.src.value);
				}
			}
		}
	)
});


document.register("p-feature",
{
	prototype: Object.create
	(
		HTMLElement.prototype,
		{
			createdCallback: {
				value: function ()
				{
					var that = $(this);

					var uri = Auxiliary.parseUri(window.location.toString());

					if (uri.searchMap.hasOwnProperty(that.attr("name")))
					{
						that.addClass("p-feature-enabled");
					}

					that.addToFeatureToggler();
				}
			}
		}
	)
});
