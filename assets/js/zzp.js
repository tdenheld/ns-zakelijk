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
    const front = $('.js-zzp-st-front');
    const back = $('.js-zzp-st-back');
    const init = 0;
    var currentIndex;

    if (obj[0] && nav[0]) {
        obj.eq(init).show();
        nav.eq(init).addClass('is-active');

        // turning the tile
        // ------------------------------
        obj.each(function () {
            const innerTile = $('.js-zzp-st-inner', this);
            const info = $('.js-zzp-st-info', this);
            const close = $('.js-zzp-st-close', this);
            const thisFront = $('.js-zzp-st-front', this);
            const thisBack = $('.js-zzp-st-back', this);

            // match height of inner tile
            innerTile.css({
                'height': obj.height()
            });

            // turn tile transition
            const turnTile = new TimelineMax({
                paused: true
            });
            turnTile.to(this, 0.3, {
                ease: Power4.easeIn,
                opacity: 0,
                rotationY: '180deg',
                scaleY: 0.9
            }).set(thisFront, {
                display: 'none'
            }).set(thisBack, {
                display: 'block'
            }).to(this, 0.3, {
                ease: Power4.easeOut,
                opacity: 1,
                rotationY: '0deg',
                scaleY: 1
            });

            // execution
            info.click(() => {
                turnTile.play(0);
            });

            close.click(() => {
                turnTile.reverse(0);
            });
        });

        function resetTile() {
            front.show();
            back.hide();
        }   

        // navigate through tiles
        // ------------------------------
        function transition(card, xStart, xEnd) {
            const tl = new TimelineMax();
            tl.to(obj, 0.3, {
                ease: Power4.easeIn,
                opacity: 0,
                x: xEnd,
                display: 'none',
                onComplete() {
                    resetTile();
                }
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

            // Draggable.create(card, {
            //     type: 'x',
            //     throwProps: true,
            //     lockAxis: true,
            //     zIndexBoost:false,
            //     onDragEnd() {
            //         transition(card, 200, -200);
            //     }
            // });

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