function add_breadcrumb_item(descricao, link) {
    if ($(".breadcrumb").length === 0) {
        $("#page-inner").prepend('<ol class="breadcrumb"><li><a href="painel.html">' + txt.painel + '</a></li></ol>');
    }
    if (link === undefined) {
        $(".breadcrumb").append('<li class="active">' + descricao + '</li>');
    } else {
        $(".breadcrumb").append('<li><a href="' + link + '">' + descricao + '</a></li>');
    }

}