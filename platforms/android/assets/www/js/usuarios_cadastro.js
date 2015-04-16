$(function(){
	define_titulo(txt.usuarios_cadastro_titulo);
	validar_token();
	text_placeholder("#usu_login", txt.login);
	
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
