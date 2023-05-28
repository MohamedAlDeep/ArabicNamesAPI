
// Importing
const express = require('express')
const app = express()
const fs = require('file-system');
const bodyParser = require('body-parser')

// Server port
const port = 3000

// Some settings
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

// Routers
app.post('/add', (req, res) => {
  let name = req.body.name

  app.get('/data', (req, res) => {
    res.send(name)
  })

  res.redirect('/data')
})

// Server listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
