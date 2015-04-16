$(function () {
    text_placeholder("#usu_login", txt.login);
    var usu_id = getUrlParameter('usu_id');
    if(usu_id !== undefined) {
        define_titulo(txt.usuarios_edicao_titulo);
        urlToForm();
    } else {
        define_titulo(txt.usuarios_cadastro_titulo);
        validar_token();
    }
    
    $('#form').submit(function (e) {
        if ($(this).valid()) {
            $.post(ajax, $(this).serialize(), function (retorno) {
                if (erro_verificacao(retorno)) {
                    alert(txt.cadastrado_sucesso);
                    limpar_form();
                }
            }, 'json');
        }
        e.preventDefault();
    });
});
