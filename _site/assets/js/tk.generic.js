// global vars
// ------------------------------------------------------------
// ------------------------------------------------------------
var vw = Number;
var vh = Number;
var mobile = Boolean;
var scrolled = false;



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
});



// basic toggle class
// ------------------------------------------------------------
$(".js-toggle").click(function () {
    $(this).toggleClass("is-active");
});



// functionality that"s on linked on scroll
// ------------------------------------------------------------
$(window).scroll(() => {
    scrolled = true;
    if (scrolled) {
        //requestAnimationFrame(scrolling);
    };
});

function scrolling() {
    var pos = $(window).scrollTop();
    // fade arrow scroll down button
    scrolled = false;
};




// preloader
// ------------------------------------------------------------	
function loader() {
    // init loader view
    TweenMax.to(".js-loader", 0.1, {
        opacity: 1
    });

    // load website
    window.addEventListener("load", function () {
        TweenLite.to(".js-loader", 0.3, {
            delay: 0.7,
            ease: Power3.easeInOut,
            autoAlpha: 0,
            display: "none",
            onComplete: function () {
                TweenLite.set(".js-loaded", {
                    display: "block",
                });
            }
        });
    });
};
loader();