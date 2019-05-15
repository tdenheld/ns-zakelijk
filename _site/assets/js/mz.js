function login() {
    const loginSubmit = $(".js-login-submit");
    const loginForm = $("#js-login-form");
    const recoveryForm = $("#js-recovery-form");
    const formField = $(".js-formfield");

    const errorLabelClass = "tk-formfield__error is-hidden js-formfield-error";
    const emailRequiredMessage = "Vul een geldig e-mailadres in.";
    const emailNotValidMessage = "Kijk nog even. Dit e-mailadres lijkt niet correct.";

    if (loginForm[0]) {
        loginForm.validate({
            onkeyup: false,
            errorClass: "is-error",
            errorPlacement: function (label, element) {
                label.addClass(errorLabelClass);
                label.insertAfter(element);
            },
            wrapper: "div",
            messages: {
                email: {
                    required: emailRequiredMessage,
                    email: emailNotValidMessage,
                },
                username: "Vul een gebruikersnaam in.",
                password: "Vul een wachtwoord in.",
            },
            submitHandler: function (form) {
                if (loginSubmit[0]) {
                    loginSubmit.addClass("is-loading");
                    $(".js-submit-loader-icon").addClass("is-active");
                    $(".js-recovery-message").slideUp(200);
                    setTimeout(() => {
                        $(".js-form-error").slideDown(200);
                        loginSubmit.removeClass("is-loading");
                        $(".js-submit-loader-icon").removeClass("is-active");
                        loginSubmit.blur();
                    }, 1000)
                };
            },
        });
    };

    if (recoveryForm[0]) {
        recoveryForm.validate({
            onkeyup: false,
            errorClass: "is-error",
            errorPlacement: function (label, element) {
                label.addClass(errorLabelClass);
                label.insertAfter(element);
            },
            wrapper: "div",
            messages: {
                email: {
                    required: emailRequiredMessage,
                    email: emailNotValidMessage,
                },
            },
        });
    };

    // remove error on key up
    if (formField[0]) {
        formField.each(function () {
            $("input", this).keyup(() => {
                $(".js-formfield-error", this).slideUp(200);
            });
        });
    };
};

function togglePassword() {
    const password = $("#js-toggle-password");
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
};

function recoveryMessage() {
    const button = $(".js-recovery-submit");
    const message = $(".js-recovery-message");
    const data = sessionStorage.getItem("recoveryMessage");
    const email = $("#email");
    const emailRecovery = $("#email-recovery");
    const label = $(".js-recovery-message span");

    function setGetEmail(obj) {
        if (obj[0]) {
            obj.val(sessionStorage.getItem("email"));
            obj.focusout(() => {
                sessionStorage.setItem("email", obj.val());
            });
        };
    };
    setGetEmail(email);
    setGetEmail(emailRecovery);

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
    togglePassword();
    recoveryMessage();
});