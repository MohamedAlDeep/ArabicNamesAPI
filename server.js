
// Importing
const express = require('express')
const app = express()
var fs = require('fs');

const bodyParser = require('body-parser');
const { constants } = require('buffer');

// Variables
const port = 3000


// Some settings
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

// Code

app.get('/add', (req, res) => {
  const name = req.body.name
  const data = {}
  fs.writeFile('names.json')
})

app.get('/data', (req, res) => {
    let n = 2
      fs.readFile("names.json", "utf8", (data) => {
        const newdata = JSON.stringify(data)
        res.json(newdata)
      })
})

// Server listening
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
