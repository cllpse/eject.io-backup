window.Auxiliary = {
	parseUri: function (uri)
	{
		var a = document.createElement("a");

		a.href = uri;

		return {
			protocol: a.protocol,
			hostname: a.hostname,
			port: a.port,
			pathname: a.pathname,
			search: a.search,
			hash: a.hash,
			host: a.host,

			searchMap: (function ()
			{
				var r = {};
				var s = a.search.substring(1);

				if (s.length > 0)
				{
					s.split("&").forEach(function (e)
					{
						var a = e.split("=");

						r[a[0]] = a[1];
					});
				}

				return r;
			}())
		};
	},

	Html: {
		Element: function (o)
		{
			this.toString = function ()
			{
				var loop = function(c, f)
				{
					if (c)
					{
						for (var i = 0, l = c.length; i < l; i++)
						{
							if (c[i] !== null)
							{
								f(c[i]);
							}
						}
					}
				};

				var a = [];

		        a.push("<");
		        a.push(o.name);

				loop(o.attributes, function (e)
				{
					a.push(e.toString());
				});

		        a.push(">");

		        loop(o.children, function (e)
				{
					a.push(e.toString());
				});

		        a.push(o.html || "");

		        a.push("</");
		        a.push(o.name);
		        a.push(">");

		        return a.join("");
			};
		},

		Attribute: function (k, v)
		{
			this.toString = function ()
			{
				return " " + k + "=\"" + v + "\"";
			};
		}
	}
};
