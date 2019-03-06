// form
// ------------------------------------------------------------
// ------------------------------------------------------------

function form() {
    var submitLogin = $(".js-submit-login");
    var password = $("#js-toggle-password");
    var recoverPassword = $("#mz-recover-password");

    if (submitLogin[0]) {
        submitLogin.click(function () {
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

    if (password[0]) {
        password.click(() => {
            password.toggleClass("is-active");
            if (password.hasClass("is-active")) {
                $("#password").attr({
                    type: "text"
                });
            } else {
                $("#password").attr({
                    type: "password"
                });
            };
        });
    };

    if (recoverPassword[0]) {
        var errorSelector = ".js-formfield-error";

        recoverPassword.validate({
            onkeyup: false,
            errorClass: "is-error",
            errorLabelContainer: errorSelector,
            messages: {
                email: {
                    required: "Sorry, we hebben echt een e-mailadres van je nodig.",
                    email: "Kijk nog even. Dit e-mailadres lijkt niet correct."
                }
            }
        });
    };
};

$(function () {
    form();
});