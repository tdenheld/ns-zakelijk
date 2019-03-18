function login() {
    var submitLogin = $(".js-submit-login");
    var password = $("#js-toggle-password");
    var recoveryForm = $("#mz-recovery-form");

    if (submitLogin[0]) {
        submitLogin.click(function () {
            $(this).addClass("is-loading");
            $(".js-submit-loader-icon").addClass("is-active");
            $(".js-recovery-message").slideUp(200);
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

    if (recoveryForm[0]) {
        var errorSelector = ".js-formfield-error";

        recoveryForm.validate({
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

function recoveryMessage() {
    var button = $(".js-recovery-button");
    var message = $(".js-recovery-message");
    var data = sessionStorage.getItem("recoveryMessage");
    var email = $("#email");
    var emailRecovery = $("#email-recovery");
    var label = $(".js-recovery-message span");

    if (email[0]) {
        email.val(sessionStorage.getItem("email"));
        email.focusout(() => {
            sessionStorage.setItem("email", email.val());
        });
    };
    if (emailRecovery[0]) {
        emailRecovery.val(sessionStorage.getItem("email"));
        emailRecovery.focusout(() => {
            sessionStorage.setItem("email", emailRecovery.val());
        });
    };
    if (label[0]) {
        label.text(sessionStorage.getItem("email"));
    };
    if (button[0]) {
        button.click(() => {
            if (emailRecovery.val() !== "") {
                sessionStorage.setItem("recoveryMessage", true);
            };
        });
    };
    if (message[0]) {
        if (data !== null && email.val() !== "") {
            message.show();
        } else {
            message.hide();
        };
    };
};

$(function () {
    login();
    recoveryMessage();
});