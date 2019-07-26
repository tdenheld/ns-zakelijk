// ZZP Campagne
// ------------------------------------------------------------
// ------------------------------------------------------------

function scrollMagic() {
    const section = $('.js-scroll-magic');

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: 99999,
        },
    });

    function scrollTrig(obj) {
        var hook = 0.94;
        var customHook = $(obj).attr('hook');
        if (customHook != null) {
            hook = customHook;
        };
        var scrll = new ScrollMagic.Scene({
                triggerElement: obj,
            })
            .triggerHook(hook)
            .offset(0)
            .on('start', function () {
                $('.js-tr', obj).toggleClass('is-active');
                if ($(obj).hasClass('js-tr')) {
                    $(obj).toggleClass('is-active');
                };
            })
            //.addIndicators()
            .addTo(controller);
    };

    if (section[0]) {
        section.each(function (i) {
            scrollTrig(this);
        });
    };
};

$(function () {
    scrollMagic();
});