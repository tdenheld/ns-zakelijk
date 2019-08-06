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
        }
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
    }

    if (section[0]) {
        section.each(function (i) {
            scrollTrig(this);
        });
    }
}

function zzpService() {
    const obj = $('.js-zzp-st');
    const nav = $('.js-zzp-st-nav');

    if (obj[0] && nav[0]) {
        obj.eq(0).show();
        nav.eq(0).addClass('is-active');

        nav.each(function (i) {
            $(this).click(() => {
                obj.hide();
                nav.removeClass('is-active');
                $(this).addClass('is-active');
                obj.eq(i).show();
            });
        });
    }
}

$(function () {
    scrollMagic();
    zzpService();
});