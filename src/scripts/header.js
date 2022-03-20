const title = document.querySelector("header > h1")

title.addEventListener("click", () => {
	window.location.assign(String(window.location.origin))
})