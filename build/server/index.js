const express = require('express')
const bodyParser = require('body-parser')
const port = 8080

const app = express()

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'))

app.listen(port, () => {
    console.log(`Virtual tutor listening on port ${port}`)
})