var arquivoDownload;
function downloadLink(nomeArquivo) {
    return ajax + '?a=arquivos&b=download&token=' + window.localStorage.getItem("token") + '&arquivo=' + nomeArquivo;
}

function startDownload(nomeArquivo) {
    arquivoDownload = nomeArquivo;

    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function fail() {
    alert(txt.memoria_falha);
}

function gotFS(fileSystem) {
    window.rootFS = fileSystem.root;
    downloadImage(fileSystem, arquivoDownload);
}

function downloadImage(fileSystem, fileName) {
    $("#ajax_loader_background").show();
    var ft = new FileTransfer();
    ft.download(
            downloadLink(fileName),
            fileSystem.root.toURL() + 'Download/' + fileName,
            function (entry) {
                alert(txt.download_sucesso + ": " + entry.fullPath);
                $("#ajax_loader_background").hide();
            },
            function (error) {
                alert(txt.download_falha + ":" + error.code);
                $("#ajax_loader_background").hide();
            }
    );
}