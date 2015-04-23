$(function () {
    $("button[type=reset]").click(function () {
        limpar_form();
    });
});

function limpar_form() {
    $("input[type=text]").val("");
    $("input[type=password]").val("");
    $("input[type=file]").val("");
}