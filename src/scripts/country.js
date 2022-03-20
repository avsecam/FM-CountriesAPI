import { removeTrailingComma } from "./utility.js"


const countryDetailsSub = document.querySelector(".countryDetailsSub")
const subDetails = countryDetailsSub.querySelectorAll("span")

subDetails.forEach((detail) => removeTrailingComma(detail))


// add commas to population
const population = document.querySelector(".countryDetailsMain > .detail:nth-child(2) > span")
population.innerText = Number(population.innerText).toLocaleString()


const backButton = document.querySelector(".backButton")
backButton.addEventListener("click", () => {
	history.back()
})


const borderCountries = document.querySelectorAll(".borderCountry")
borderCountries.forEach((borderCountry) => {
	borderCountry.addEventListener("click", () => {
		const borderCountryCode = borderCountry.querySelector("span").innerText
		const path = String(window.location.origin)
		window.location.assign(`${path}/country/?code=${borderCountryCode}`)
	})
})