// Uitgestelde betaling
// ------------------------------------------------------------
// ------------------------------------------------------------


function choiceSelector() {
    var time = 250;
    var obj = ".js-selector-item";
    var toggleClass = "is-selected";
    var initID = "#js-selector-item-0"; // set default on current card
    var content = ".js-selector-content";
    let paynow = true;

    if ($(".js-selector-item")[0]) {
        $(".js-selector-item").each(function (i) {
            $(this).attr("id", "js-selector-item-" + i);
        });
    };

    if ($(obj)[0]) {
        $(content).slideUp(time);
        $(initID + " " + content).slideDown(0);
        $(initID).addClass(toggleClass);

        $(obj).click(function () {            
            if (!$(this).hasClass(toggleClass)) {
                $(obj).removeClass(toggleClass);
                $(this).addClass(toggleClass);
                $(content).slideUp(time);
                $(content, this).slideDown(time);

                if (paynow) {
                    $(".js-pay-now").delay(time).slideUp(time);
                    paynow = false;
                } else {
                    $(".js-pay-now").delay(time).slideDown(time);
                    paynow = true;
                };
            };
        });
    };
};
choiceSelector();