const express = require("express")
const app = express()
const config = require("config")
const PORT = config.get("PORT" || 5000)
const HOST = config.get("HOST")
const cors = require("cors")
const router = require("./router")

app.use(cors())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server has been started on ${HOST}:${PORT}`)
})