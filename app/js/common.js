$(document).ready(function () {

    var heightPage = function () {

        var docH = $(document).height(),
            mainBlock = $(".main-content"),
            footer = $(".footer"),
            footerH = footer.outerHeight();

        mainBlock.outerHeight(docH - footerH);
    };

    heightPage();

    var lang = function () {

        var langItem = $(".js-lang");

        langItem.on("click touch", function () {

            var langType = $(this).data("lang");

            langItem.removeClass("active-lg");
            $(this).addClass("active-lg");

        });
    };

    lang();
});