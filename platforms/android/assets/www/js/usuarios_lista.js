$(function(){
	define_titulo(txt.usuarios_lista_titulo);
	
        $.post(ajax, {a: "usuarios", b: "lista", token: window.localStorage.getItem("token")}, function(retorno) {
            if(erro_verificacao(retorno)) {
                $.each( retorno.lista, function( index, value ){
                    $("#tabela tbody").append('<tr>'+
                                                '<th><b class="ui-table-cell-label">'+txt.id+':</b>'+value.usu_id+'</th>'+
                                                '<td><b class="ui-table-cell-label">'+txt.login+':</b>'+value.usu_login+'</td>'+
                                                '<td><b class="ui-table-cell-label">'+txt.opcoes+':</b>'+
                                                '<a class="btn btn-primary" href="#">Editar</a> '+
                                                '<a class="btn btn-danger" href="#">Deletar</a></td>'+
                                            '</tr>');
                });
                
                                    
                table_load();
            }
        },'json');
});
