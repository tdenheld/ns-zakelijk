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

    if (obj[0]) {
        obj.each(function () {
            const header = $('.js-zzp-st-header', this);
            const chevron = $('.js-zzp-st-chevron', this);
            const close = $('.js-zzp-st-close', this);
            const content = $('.js-zzp-st-content', this);

            header.click(() => {
                if (!header.hasClass('is-active')) {
                    $('.js-zzp-st-header').removeClass('is-active');
                    $('.js-zzp-st-chevron').show();
                    $('.js-zzp-st-close, .js-zzp-st-content').hide();
                    obj.css('z-index', '0');
                }

                $(this).css('z-index', '1');
                content.toggle();
                chevron.toggle();
                close.toggle();
                header.toggleClass('is-active');
            });
        });
    }
}

$(function () {
    scrollMagic();
    zzpService();
});