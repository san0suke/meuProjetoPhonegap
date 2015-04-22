$(function () {
    $(document).ajaxStart(function () {
        $("#ajax_loader_background").show();
    });
    $(document).ajaxStop(function () {
        $("#ajax_loader_background").hide();
    });
});