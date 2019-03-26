function login() {
    var submitLogin = $(".js-submit-login");
    var loginForm = $("#mz-login-form");

    if (loginForm[0]) {
        loginForm.validate({
            onkeyup: false,
            errorClass: "is-error",
            errorPlacement: function(label, element) {
                label.addClass("f14 f-red mt-1 lh-copy is-hidden js-formfield-error");
                label.insertAfter(element);
            },
            wrapper: "div",
            messages: {
                email: {
                    required: "Vul een geldig e-mailadres in.",
                    email: "Kijk nog even. Dit e-mailadres lijkt niet correct.",
                },
                username: "Vul een gebruikersnaam in.",
                password: "Vul een wachtwoord in.",
            },
            submitHandler: function (form) {
                submitLogin.addClass("is-loading");
                $(".js-submit-loader-icon").addClass("is-active");
                $(".js-recovery-message").slideUp(200);
                setTimeout(() => {
                    $(".js-form-error").slideDown(200);
                    submitLogin.removeClass("is-loading");
                    $(".js-submit-loader-icon").removeClass("is-active");
                    submitLogin.blur();
                }, 1000);
            },
        });
    };
};

function password() {
    var password = $("#js-toggle-password");
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

function recovery() {
    var recoveryForm = $("#mz-recovery-form");
    if (recoveryForm[0]) {
        recoveryForm.validate({
            onkeyup: false,
            errorClass: "is-error",
            errorPlacement: function(label, element) {
                label.addClass("f14 f-red mt-1 lh-copy is-hidden js-formfield-error");
                label.insertAfter(element);
            },
            wrapper: "div",
            messages: {
                email: {
                    required: "Vul een geldig e-mailadres in.",
                    email: "Kijk nog even. Dit e-mailadres lijkt niet correct.",
                },
            },
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
    password();
    recovery();
    recoveryMessage();
});