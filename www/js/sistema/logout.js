function logout() {
	window.localStorage.removeItem("token");
	document.location = "index.html";
}