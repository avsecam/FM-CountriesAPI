const axios = require("axios")
const express = require("express")
const app = express()

const sampleJsonSingle = require("./belgium.json")
const sampleJsonAll = require("./all.json")

app.use(express.static("./src/scripts"))

app.set("views", "./src/views")
app.set("view engine", "pug")

let jsonData
const countriesPerPage = 8

app.get("/", async (req, res) => {
	try {
		jsonData = await axios.get("https://restcountries.com/v3.1/all")
	} catch {
		console.log("ERROR");
	}
	// jsonData = sampleJsonAll

	// pagination
	const pageCount = Math.ceil(jsonData.length / countriesPerPage)
	let pageNumber = req.query.page ?? 0
	if (pageNumber > pageCount) pageNumber = pageCount
	await res.render(
		"allCountries",
		{
			data: jsonData.data.slice(pageNumber * countriesPerPage, (pageNumber * countriesPerPage) + countriesPerPage),
			pageNumber,
			previous: (pageNumber > 0) ? true : false,
			next: (pageNumber != pageCount - 1) ? true : false
		}
	)
})

app.get("/region/:region", async (req, res) => {
	try {
		jsonData = await axios.get(`https://restcountries.com/v3.1/region/${req.params.region}`)
	} catch {
		console.log("ERROR");
	}


	// pagination
	const pageCount = Math.ceil(jsonData.data.length / countriesPerPage)
	let pageNumber = req.query.page ?? 0
	if (pageNumber > pageCount) pageNumber = pageCount
	await res.render(
		"allCountries",
		{
			data: jsonData.data.slice(pageNumber * countriesPerPage, (pageNumber * countriesPerPage) + 6),
			pageNumber,
			previous: (pageNumber > 0) ? true : false,
			next: (pageNumber != pageCount - 1) ? true : false
		}
	)
})

app.get(["/country", "/country/:country"], async (req, res) => {
	try {
		if (req.query.code) jsonData = await axios.get(`https://restcountries.com/v3.1/alpha/${req.query.code}`)
		else jsonData = await axios.get(`https://restcountries.com/v3.1/name/${req.params.country}`)
	} catch(e) {
		console.log("ERROR country", req.query.code);
	}
	// jsonData = sampleJsonSingle
	// res.render("country", {data: jsonData[0]})
	await res.render(
		"country",
		{
			data: jsonData.data[0]
		}
	)
})

app.listen(process.env.PORT || 3000, () => {console.log("Express server running...")})