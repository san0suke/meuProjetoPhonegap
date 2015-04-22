function define_titulo(text) {
    document.title = text;
    if ($("#titulo_pagina").length > 0) {
        $("#titulo_pagina").html(text);
    }
}

function text(texto) {
    document.write(texto);
}

function text_placeholder(selector, texto) {
    $(selector).attr("placeholder", texto);
}