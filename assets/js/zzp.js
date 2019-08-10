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
    const navbar = $('.js-zzp-st-navbar');
    const index = 0;
    let currentIndex;

    if (obj[0] && nav[0]) {
        obj.eq(index).show();
        nav.eq(index).addClass('is-active');

        function transition(card, xStart, xEnd) {
            const tl = new TimelineMax();
            tl.to(obj, 0.3, {
                ease: Power4.easeIn,
                opacity: 0,
                x: xEnd,
                display: 'none'
            }).fromTo(card, 0.4, {
                x: xStart
            }, {
                ease: Power4.easeOut,
                opacity: 1,
                x: 0,
                display: 'block',
            });
        }

        function scrollNav(i) {
            let xPosition = i * (40 + 15000 / vw);
            TweenMax.to(navbar, .6, {
                ease: Power4.easeOut,
                scrollTo: {
                    x: xPosition,
                    autoKill: false,
                }
            });
        }

        function checkIndex() {
            nav.each(function () {
                if ($(this).hasClass('is-active')) {
                    currentIndex = $(this).parent().index();
                }
            });
        }

        nav.each(function (i) {
            const card = obj.eq(i);

            Draggable.create(card, {
                type: "x",
                throwProps: true,
                lockAxis: true,
                onDragEnd() {
                    transition(card, 200, -200);
                }
            });

            $(this).click(() => {
                checkIndex();
                nav.removeClass('is-active');
                $(this).addClass('is-active');
                scrollNav(i);

                if (i > currentIndex) {
                    transition(card, 200, -200);
                } else if (i < currentIndex) {
                    transition(card, -200, 200);
                }
            });
        });
    }
}

$(function () {
    scrollMagic();
    zzpService();
});