function onDeviceReady() {
    alert("device is ready");
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function fail() {
    alert("failed to get filesystem");
}

function gotFS(fileSystem) {
    alert("got filesystem");

    // save the file system for later access
    alert(fileSystem.root.fullPath);
    window.rootFS = fileSystem.root;
    downloadImage(fileSystem, "http://www.aerosiq.com.br/projetoPHP/ajax.php?a=arquivos&b=download&token=326ef7112503355ccf883cfdf1e76649&arquivo=22-04-2015_02-05-34_tutorialCordova.txt","teste2.txt");
//    downloadImage(fileSystem, "http://www.aerosiq.com.br/wp-content/uploads/logo_2.png","logo_2.png");
}

function downloadImage(fileSystem, url, fileName) {
    var ft = new FileTransfer();
    ft.download(
            url,
//            window.rootFS.fullPath + "/" + fileName,
            fileSystem.root.toURL() + '/Download/' + fileName,
            function (entry) {
                alert("download complete: " + entry.fullPath);

            },
            function (error) {
                alert("download error" + error.code);
            }
    );
}
$(function () {

    document.addEventListener("deviceready", onDeviceReady, false);
});
