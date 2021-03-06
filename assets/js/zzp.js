// ZZP Campagne
// ------------------------------------------------------------
// ------------------------------------------------------------

function zzpService() {
    const obj = $('.js-zzp-st');
    const nav = $('.js-zzp-st-nav');
    const navbar = $('.js-zzp-st-navbar');
    const init = 0;
    let currentIndex;

    if (!obj[0] && !nav[0]) return;

    obj.eq(init).show();
    nav.eq(init).addClass('is-active');

    // turning the tile
    // ------------------------------
    obj.each(function () {
        const info = $('.js-zzp-st-info', this);
        const close = $('.js-zzp-st-close', this);
        const front = $('.js-zzp-st-front', this);
        const back = $('.js-zzp-st-back', this);

        // turn tile transition
        const turnTile = new TimelineMax({
            paused: true
        });
        turnTile.to(this, 0.3, {
            ease: Power4.easeIn,
            opacity: 0,
            rotationY: '180deg',
            scaleY: 0.9
        }).set(front, {
            display: 'none'
        }).set(back, {
            display: 'block'
        }).to(this, 0.3, {
            ease: Power4.easeOut,
            opacity: 1,
            rotationY: '0deg',
            scaleY: 1
        });

        // execution
        info.click(() => turnTile.play(0));
        close.click(() => turnTile.reverse(0));
    });

    function resetTile() {
        $('.js-zzp-st-front').show();
        $('.js-zzp-st-back').hide();
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
        let index = i - 1;
        let xPosition = 0;

        if (index >= 0) {
            xPosition = index * (40000 / document.body.clientWidth) + 30;
        } else if (index === -1) {
            xPosition = 0;
        }

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
            if ($(this).hasClass('is-active')) currentIndex = $(this).parent().index();
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

document.addEventListener('DOMContentLoaded', () => {
    zzpService();
});