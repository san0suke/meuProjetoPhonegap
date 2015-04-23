$(function () {
    define_titulo(txt.arquivo_upload_titulo);
    add_breadcrumb_item(txt.cadastros);
    add_breadcrumb_item(txt.arquivos_upload);
    add_breadcrumb_item(txt.cadastro);

    $('#form').submit(function (e) {
        e.preventDefault();

        if ($(this).valid()) {
            var data;
            data = new FormData(this);

            $.ajax({
                url: ajax,
                data: data,
                processData: false,
                contentType: false,
                type: 'POST',
                dataType: 'json',
                success: function (retorno) {
                    if (erro_verificacao(retorno)) {
                        alert(txt.cadastrado_sucesso);
                        limpar_form();
                    }
                }
            });
        }
    });

});