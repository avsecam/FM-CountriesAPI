const title = document.querySelector("header > h1")

title.addEventListener("click", () => {
	window.location.assign(String(window.location.origin))
})

const darkThemeButton = document.querySelector("header > button")

darkThemeButton.addEventListener("click", () => {
	document.body.classList.toggle("darkTheme")
	if (document.body.classList.contains("darkTheme")) {
		localStorage.setItem("darkTheme", "true")
	} else {
		localStorage.setItem("darkTheme", "false")
	}
})

document.body.onload = () => {
	if (!localStorage.getItem("darkTheme")) {
		localStorage.setItem("darkTheme", "false")
	} else {
		if (localStorage.getItem("darkTheme") === "true") {
			document.body.classList.add("darkTheme")
		} else {
			document.body.classList.remove("darkTheme")
		}
	}
}