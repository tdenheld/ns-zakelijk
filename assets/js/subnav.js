    // functionality that"s on linked on scroll
    // ------------------------------------------------------------

    $(window).scroll(function () {
        scrolled = true;
        if (scrolled) {
            requestAnimationFrame(scrolling);
        };
    });

    function scrolling() {
        var pos = $(window).scrollTop();

        // fade arrow scroll down button
        if (pos > 60) {
            $(".js-scroll-down").addClass("o-0");
            $(".js-subnav").addClass("is-sticky");
        } else {
            $(".js-scroll-down").removeClass("o-0");
            $(".js-subnav").removeClass("is-sticky");
        };

        scrolled = false;

        $(".js-subnav-toggle").removeClass("is-active");
        $(".js-subnav, .js-subnav-items").removeClass("is-active");
    };



    // subnav
    // ------------------------------------------------------------
    $(".js-subnav-toggle").click(function () {
        $(this).toggleClass("is-active");
        $(".js-subnav, .js-subnav-items").toggleClass("is-active");
    });