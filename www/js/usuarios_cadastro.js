$(function () {
    text_placeholder("#usu_login", txt.login);
    var usu_id = getUrlParameter('usu_id');
    
    if(usu_id !== undefined) {
        define_titulo(txt.usuarios_edicao_titulo);
        add_breadcrumb_item(txt.usuarios_lista_titulo, "usuarios_lista.html");
        add_breadcrumb_item(txt.usuarios_edicao_titulo);
        urlToForm();
        $("#b").val("edicao");
        
        $.post(ajax, {
                        usu_id: usu_id,
                        a: "usuarios", 
                        b: "consulta", 
                        token: window.localStorage.getItem("token")
                    }, function(retorno) {
            if(erro_verificacao(retorno)) {
                $("#usu_login").val(retorno.registro.usu_login);
            }
        }, 'json');
    } else {
        define_titulo(txt.usuarios_cadastro_titulo);
        add_breadcrumb_item(txt.usuarios_cadastro_titulo);
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
