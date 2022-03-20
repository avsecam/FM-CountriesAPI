import { removeTrailingComma } from "./utility.js"


let path = window.location.href.split("?")[0]

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
	const pageQueryPattern = /page=[0-9]/
	const newPageNumber = (direction === "next") ? pageNumber + 1 : pageNumber - 1

	let link
	if (window.location.href.match(pageQueryPattern)) {
		link = window.location.href.replace(pageQueryPattern, `page=${newPageNumber}`)
	} else {
		link = `${path}?page=${newPageNumber}`
	}
	window.location.assign(link)
}


const countries = document.querySelectorAll(".country")
countries.forEach((country) => {
	// add link
	country.addEventListener("click", () => {
		const countryName = country.querySelector("h2").innerText
		path = String(window.location.origin)
		window.location.assign(`${path}/country/${countryName}`)
	})

	// add commas to number
	const population = country.querySelector(".detail:first-of-type > span")
	population.innerText = Number(population.innerText).toLocaleString()

	// remove trailing comma
	const capitals = country.querySelector(".detail:last-of-type > span")
	removeTrailingComma(capitals)
})


const regionFilters = document.querySelectorAll("ul > li")
regionFilters.forEach((regionFilter) => {
	regionFilter.addEventListener("click", () => {
		const regionName = regionFilter.innerText.toLowerCase()
		path = String(window.location.origin)
		if (regionName === "all") window.location.assign(`${path}`)
		else window.location.assign(`${path}/region/${regionName}`)
	})
})