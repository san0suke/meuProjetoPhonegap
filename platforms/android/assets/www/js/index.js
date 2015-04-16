$(function() {
	define_titulo(txt.login_titulo);
	
	if(window.localStorage.getItem("token") != null) {
		document.location = "painel.html";
	}
	$("#form-signin").submit(function(e){
		e.preventDefault();
		
		var txtLogin = $("#login").val();
		
		$.post(ajax, $("#form-signin").serialize(), function(retorno){
			if(erro_verificacao(retorno)) {
				window.localStorage.setItem("token", retorno.token);
				document.location = "painel.html";
			}
		}, "json");
	});
});