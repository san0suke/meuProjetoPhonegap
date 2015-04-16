$(function(){
	define_titulo(txt.usuarios_lista_titulo);
//	validar_token();
	
	$('#form').submit(function (e) {
		if($(this).valid()) {
			$.post(ajax, $(this).serialize(), function(retorno) {
				if(erro_verificacao(retorno)) {
					alert(txt.cadastrado_sucesso);
					limpar_form();
				}
			},'json');
		}
		e.preventDefault();
	});
});
