(function ()
{
	var featureToggler = $(".feature-toggle");
	var addedFeatures = [];

	if (!featureToggler.length)
	{
		var ul = new Auxiliary.Html.Element(
		{
			name: "ul",
			attributes: [ new Auxiliary.Html.Attribute("class", "feature-toggle") ]
		});

		featureToggler = $(ul.toString()).appendTo("body");
	}


	$.fn.addToFeatureToggler = function ()
	{
		return this.each(function ()
		{
			var that = $(this);
			var name = that.attr("name");

			if ($.inArray(name, addedFeatures) === -1)
			{
				addedFeatures.push(name);
			}
			else
			{
				return;
			}

			var uri = Auxiliary.parseUri(window.location.toString());

			var li = new Auxiliary.Html.Element(
			{
				name: "li",
				children: [
					new Auxiliary.Html.Element(
					{
						name: "input",
						attributes: [
							new Auxiliary.Html.Attribute("type", "checkbox"),
							new Auxiliary.Html.Attribute("id", name),
							uri.searchMap.hasOwnProperty(name) ? new Auxiliary.Html.Attribute("checked", "checked") : null
						]
					}),

					new Auxiliary.Html.Element(
					{
						name: "label",
						html: name,
						attributes: [ new Auxiliary.Html.Attribute("for", name) ]
					})
				]
			});

			featureToggler.append(li.toString());
		});
	};


	$(document).on("change", ".feature-toggle input", function ()
	{
		var uri = Auxiliary.parseUri(window.location.toString());
		var searchMap = uri.searchMap;
		var feature = $("p-feature[name='" + this.id + "']");

		if (feature.hasClass("p-feature-enabled"))
		{
			delete searchMap[this.id];

			feature.removeClass("p-feature-enabled");
		}
		else
		{
			searchMap[this.id] = true;

			feature.addClass("p-feature-enabled");
		}

		var a = [];

		for (key in searchMap)
		{
			if (searchMap.hasOwnProperty(key))
			{
				a.push(key);
			}
		}

		window.history.replaceState({}, document.title, uri.protocol + "//" + uri.host + uri.pathname + (a.length ? "?" : "") + a.join("&"));
	});
}());
