$(function () {
    define_titulo(txt.usuarios_lista_titulo);
    add_breadcrumb_item(txt.cadastros);
    add_breadcrumb_item(txt.usuarios);
    add_breadcrumb_item(txt.listar);

    $.post(ajax, {a: "usuarios", b: "lista", token: window.localStorage.getItem("token")}, function (retorno) {
        if (erro_verificacao(retorno)) {
            $.each(retorno.lista, function (index, value) {
                $("#tabela tbody").append('<tr>' +
                        '<th><b class="ui-table-cell-label">' + txt.id + ':</b>' + value.usu_id + '</th>' +
                        '<td><b class="ui-table-cell-label">' + txt.login + ':</b>' + value.usu_login + '</td>' +
                        '<td><b class="ui-table-cell-label">' + txt.opcoes + ':</b>' +
                        '<a class="btn btn-primary" href="usuarios_cadastro.html?usu_id=' + value.usu_id + '">Editar</a> ' +
                        '<a class="btn btn-danger inativar" usu_id="' + value.usu_id + '">Deletar</a></td>' +
                        '</tr>');
            });

            table_load();
            inativar_usuario();
        }
    }, 'json');
});
function inativar_usuario() {
    $(".inativar").click(function () {
        if (confirm(txt.confirmar_delecao)) {
            $.post(ajax, {usu_id: $(this).attr("usu_id"), a: "usuarios", b: "inativar", token: window.localStorage.getItem("token")}, function (retorno) {
                if (erro_verificacao(retorno)) {
                    alert(txt.deletado_sucesso);
                    document.location.reload();
                }
            }, 'json');
        }
    });
}