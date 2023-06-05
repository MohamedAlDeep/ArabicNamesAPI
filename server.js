
// Importing
const express = require('express')
const app = express()
var fs = require('fs');

const bodyParser = require('body-parser');
let Uname = require('./names.json')

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

app.post('/api/add', (req, res) => {
  const name = req.body.name
  let allObj = [
    {...Uname},
    {name: name}
  ]
  Object.values(allObj).forEach(val => {
    console.log(val.name);
  });

  let data = JSON.stringify(allObj);
  fs.writeFileSync('names.json', data);
  res.redirect('/api/data')
})

app.get('/api/data', (req, res) => {
      fs.readFile('names.json', 'utf8', (error, data) => {
        let newData = JSON.parse(data)
        res.json(newData)
      })
})


// Server listening
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
