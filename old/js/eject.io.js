(function ()
{
    var debounce = function(fn, delay)
    {
        var t;

        return function ()
        {
            clearTimeout(t);

            t = setTimeout(function ()
            {
                t = null;

                fn();
            }, delay);
        };
    };

    var body = document.querySelector("body");
    var html = document.querySelector("html");

    var resize = function ()
    {
        var w = window.innerWidth;
        var h = window.innerHeight;

        var i = w > h ? w : h;

        if (i > w) i = w;
        if (i > h) i = h;

        body.style.width = i + "px";
        body.style.height = i + "px";
    };

    window.onresize = debounce(resize, 200);

    resize();
}());
