const express = require("express")
const app = express()
const PORT = 3001
const cors = require("cors")

app.use(cors(corsOptions))

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const fs = require("fs")
const path = require("path")
const pathToFile = path.resolve("./data.json")

const getResources = () => JSON.parse(fs.readFileSync(pathToFile))

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/api/resources", (req, res) => {
  const resources = getResources()
  res.send(resources)
})

app.listen(PORT, () => {
  console.log("Server is listening on port: " + PORT)
})