// form
// ------------------------------------------------------------
// ------------------------------------------------------------

function form() {
    var submit = $(".js-submit");
    if (submit[0]) {
        submit.click(function () {
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
};

$(function () {
    form();
});