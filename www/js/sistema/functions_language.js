function define_titulo(text) {
	document.title = text;
}

function text(texto) {
	document.write(texto);
}

function text_placeholder(selector, texto) {
	$(selector).attr("placeholder",texto);
}