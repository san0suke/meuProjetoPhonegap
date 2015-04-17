$(function() {
    define_titulo(txt.arquivo_upload_titulo);
    add_breadcrumb_item(txt.cadastros);
    add_breadcrumb_item(txt.arquivos_upload);
    add_breadcrumb_item(txt.cadastro);
    
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