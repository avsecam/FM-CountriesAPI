const axios = require("axios")
const express = require("express")
const app = express()

const sampleJsonSingle = require("./belgium.json")
const sampleJsonAll = require("./all.json")

app.use(express.static("./src/scripts"))

app.set("views", "./src/views")
app.set("view engine", "pug")

let jsonData
const countriesPerPage = 6

app.get("/", async (req, res) => {
	jsonData = await axios.get("https://restcountries.com/v3.1/all")
	// jsonData = sampleJsonAll

	// pagination
	const pageCount = Math.ceil(jsonData.length / countriesPerPage)
	let pageNumber = req.query.page ?? 0
	if (pageNumber > pageCount) pageNumber = pageCount
	res.render(
		"allCountries",
		{
			data: jsonData.data.slice(pageNumber * countriesPerPage, (pageNumber * countriesPerPage) + 6),
			pageNumber,
			previous: (pageNumber > 0) ? true : false,
			next: (pageNumber != pageCount - 1) ? true : false
		}
	)
})

app.get("/region/:region", async (req, res) => {
	try{ 
		jsonData = await axios.get(`https://restcountries.com/v3.1/region/${req.params.region}`)
	} catch {
		console.log("ERROR");
	}

	// pagination
	const pageCount = Math.ceil(jsonData.data.length / countriesPerPage)
	let pageNumber = req.query.page ?? 0
	if (pageNumber > pageCount) pageNumber = pageCount
	res.render(
		"allCountries",
		{
			data: jsonData.data.slice(pageNumber * countriesPerPage, (pageNumber * countriesPerPage) + 6),
			pageNumber,
			previous: (pageNumber > 0) ? true : false,
			next: (pageNumber != pageCount - 1) ? true : false
		}
	)
})

app.get("/country/:country", async (req, res) => {
	// jsonData = await axios.get(`https://restcountries.com/v3.1/name/${req.params.country}`)
	jsonData = sampleJsonSingle
	res.render("country", {data: jsonData[0]})
	// res.render(
	// 	"country",
	// 	{
	// 		data: jsonData.data[0]
	// 	}
	// )
})

app.listen(3000, () => {console.log("Port 3000")})