const axios = require("axios")
const express = require("express")
const app = express()

const sampleJsonSingle = require("./belgium.json")
const sampleJsonAll = require("./all.json")

app.use(express.static("./src/scripts"))

app.set("views", "./src/views")
app.set("view engine", "pug")

let jsonData

app.get("/", async (req, res) => {
	// jsonData = await axios.get("https://restcountries.com/v3.1/all")
	jsonData = sampleJsonAll
	res.render("allCountries", {data: jsonData})
})

app.get("/:country", async (req, res) => {
	// jsonData = await axios.get(`https://restcountries.com/v3.1/name/${req.params.country}`)
	jsonData = sampleJsonSingle
	res.render("country", {data: jsonData[0]})
	// res.render("country", {data: jsonData.data[0]})
})

app.listen(3000, () => {console.log("Port 3000")})