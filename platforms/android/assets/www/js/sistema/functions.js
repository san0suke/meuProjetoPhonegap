function ini() {
    if (window.cordova) {
        document.addEventListener("deviceready", iniApp, false);
    } else {
        iniApp();
    }
}