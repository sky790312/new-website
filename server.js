/* eslint-disable */
var express = require('express')

var app = express()
var port = process.env.PORT || 5000
app.set(port)

app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('*', function (req, res) {
  // res.sendFile(__dirname + '/index.html')
  res.redirect('/');
})

app.listen(port, function () {
  console.log('Example app listening on port 5000!')
})
