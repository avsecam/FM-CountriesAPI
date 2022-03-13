// remove trailing commas in multiple details
let countryDetailsSub = document.querySelector(".countryDetailsSub")
let subDetails = countryDetailsSub.querySelectorAll("span")

subDetails.forEach((detail) => {
	if (detail.innerText.slice(-1) === ",") detail.innerText = detail.innerText.slice(0, -1)
})

// add commas to population
let population = document.querySelector(".countryDetailsMain>.detail:nth-child(2)>span")

population.innerText = Number(population.innerText).toLocaleString();