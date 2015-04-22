$(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    
    define_titulo(txt.arquivo_lista_titulo);
    add_breadcrumb_item(txt.cadastros);
    add_breadcrumb_item(txt.arquivos_upload);
    add_breadcrumb_item(txt.listar);

    $.post(ajax, {a: "arquivos", b: "lista", token: window.localStorage.getItem("token")}, function (retorno) {
        if (erro_verificacao(retorno)) {
            $.each(retorno.lista, function (index, value) {
                $("#tabela tbody").append('<tr>' +
                        '<td><b class="ui-table-cell-label">' + txt.nome + ':</b>' + value + '</td>' +
                        '<td><b class="ui-table-cell-label">' + txt.opcoes + ':</b>' +
                        '<a class="btn btn-primary" href="'+ajax+'?a=arquivos&b=download&token='+
                        window.localStorage.getItem("token")+'&arquivo=' + value + '">' + txt.download + '</a> ' +
                        '<a class="btn btn-danger deletar" arquivo="' + value + '">' + txt.deletar + '</a></td>' +
                        '</tr>');
            });

            table_load();
            deletar_arquivo();
        }
    }, 'json');
});
function onDeviceReady() {
    alert("oi");
}
function deletar_arquivo() {
    $(".deletar").click(function () {
        if (confirm(txt.confirmar_delecao)) {
            $.post(ajax, {usu_id: $(this).attr("usu_id"), a: "arquivos", b: "deletar", token: window.localStorage.getItem("token")}, function (retorno) {
                if (erro_verificacao(retorno)) {
                    alert(txt.deletado_sucesso);
                    document.location.reload();
                }
            }, 'json');
        }
    });
}