const title = document.querySelector("header > h1")

title.addEventListener("click", () => {
	window.location.assign(String(window.location.origin))
})

const darkThemeButton = document.querySelector("header > button")
const icon = darkThemeButton.querySelector("i")

darkThemeButton.addEventListener("click", () => {
	if (icon.classList.contains("fa-moon")) icon.classList.replace("fa-moon", "fa-sun")
	else icon.classList.replace("fa-sun", "fa-moon")

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
		icon.classList.remove("fa-sun")
		icon.classList.remove("fa-moon")
		if (localStorage.getItem("darkTheme") === "true") {
			document.body.classList.add("darkTheme")
			icon.classList.add("fa-moon")
		} else {
			document.body.classList.remove("darkTheme")
			icon.classList.add("fa-sun")
		}
	}
}