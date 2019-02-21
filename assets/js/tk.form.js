// form
// ------------------------------------------------------------
// ------------------------------------------------------------

function form() {

    // default form field
    // --------------------------------------------------------------------------
    function formField(i) {
        var id = "#js-ff-default-" + i;
        var input = $(id + " .tk-ff__input");
        var tick = $(id + " .tk-ff__icon--approved");

        input.keyup(() => {
            tick.removeClass("is-active");
        });

        input.focusout(function () {
            if (input.val() != "") {
                tick.addClass("is-active");
            } else {
                tick.removeClass("is-active");
            };
        });

    };

    if ($(".js-ff-default")[0]) {
        submit = false;
        $(".js-ff-default").each(function (i) {
            $(this).attr("id", "js-ff-default-" + i);
            formField(i);
        });
    };



    // email field
    // --------------------------------------------------------------------------
    function checkEmail() {
        var isValidEmail;
        var obj = ".js-ff-email";
        var input = $(obj + " .tk-ff__input");
        var tick = $(obj + " .tk-ff__icon--approved");

        if ($(obj)[0]) {
            isValidEmail = email.checkValidity();

            input.keyup(() => {
                tick.removeClass("is-active");
                isValidEmail = email.checkValidity();
            });

            input.focusout(() => {
                if (isValidEmail) {
                    tick.addClass("is-active");
                } else {
                    tick.removeClass("is-active");
                };
            });
        };
    };
    checkEmail();

    $(".js-submit").click(function () {
        $(this).addClass("is-loading");
        $(".js-submit-loader-icon").addClass("is-active");
        setTimeout(() => {
            $(".js-form-error").slideDown(200);
            $(this).removeClass("is-loading");
            $(".js-submit-loader-icon").removeClass("is-active");
            $(this).blur();
        }, 1000);
    });

};

$(function () {
    form();
});