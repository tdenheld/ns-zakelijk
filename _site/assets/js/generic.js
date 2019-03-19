// global vars
// ------------------------------------------------------------
// ------------------------------------------------------------
var vw = Number;
var vh = Number;
var mobile = Boolean;



// update screen height
// ------------------------------------------------------------	
function updateWindowSize() {
    vw = $(window).innerWidth();
    vh = $(window).innerHeight();

    // set breakpoints
    if (vw > 912) {
        mobile = false;
    } else {
        mobile = true;
    };
};
updateWindowSize();

// update when resizing
$(window).resize(function () {
    updateWindowSize();
    verticalCenter();
});



// basic functions
// ------------------------------------------------------------
function toggle() {
    var obj = $(".js-toggle");
    if (obj[0]) {
        obj.click(function () {
            $(this).toggleClass("is-active");
        });
    };
};
function radio() {
    var obj = $(".js-radio");
    if (obj[0]) {
        obj.click(function () {
            obj.removeClass("is-active");
            $(this).toggleClass("is-active");
        });
    };
};
function clearSession() {
    var obj = $(".js-clear-session");
    if (obj[0]) {
        obj.click(function () {
            sessionStorage.clear();
        });
    };
};
$(function () {
    toggle();
    radio();
    clearSession();
});



// dynamic vertical center element
// ------------------------------------------------------------
function verticalCenter() {
    var exec = $(".js-vce");
    var indicator = $(".js-vci");
    if (indicator[0]) {
        if (vh >= indicator.innerHeight() + 200 && vw >= 640) {
            exec.addClass("is-centered");
        } else {
            exec.removeClass("is-centered");
        };
    };
};
verticalCenter();



// preloader
// ------------------------------------------------------------	
function loader() {
    var loader = ".js-loader";
    var content = ".js-loaded";

    if (loader[0]) {
        // init loader view
        TweenLite.to(loader, 0.1, {
            opacity: 1
        });

        // load website
        window.addEventListener("load", function () {
            TweenLite.to(loader, 0.3, {
                delay: 0.7,
                ease: Power3.easeInOut,
                autoAlpha: 0,
                display: "none",
                onComplete: function () {
                    TweenLite.set(content, {
                        display: "block",
                    });
                }
            });
        });
    };
};
loader();