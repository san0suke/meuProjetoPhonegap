$(function () {
    if ($("form").length > 0 && window.localStorage.getItem("token") != undefined) {
        $('form').prepend('<input type="hidden" name="token" value="' + window.localStorage.getItem("token") + '" id="token" />');
    }
});