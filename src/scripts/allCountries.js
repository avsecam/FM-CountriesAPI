const path = window.location.href.split("?")[0]

const filterDropdown = document.querySelector(".filterDropdown")
const dropdownList = filterDropdown.querySelector("ul")

filterDropdown.addEventListener("click", () => {
	dropdownList.classList.toggle("open")
})

let pageNumber = Number(document.querySelector("main").dataset.page)
const previous = document.querySelector(".previousPage")
const next = document.querySelector(".nextPage")

if (previous) previous.addEventListener("click", () => {
	navigatePages("previous")
})
if (next) next.addEventListener("click", () => {
	navigatePages("next")
})

function navigatePages(direction) {
	// remove querystring

	if (direction === "next") window.location.assign(`${path}?page=${pageNumber + 1}`)
	else window.location.assign(`${path}?page=${pageNumber - 1}`)
}


const countries = document.querySelectorAll(".country")

countries.forEach((country) => {
	country.addEventListener("click", () => {
		const countryName = country.querySelector("h2")
		window.location.assign(`${path}${countryName}`)
	})
})