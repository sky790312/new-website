var express = require('express')
var compress = require('compression')

var app = express()
var port = process.env.PORT || 5000
app.set(port)

app.use(compress())
app.use(express.static('dist'))

app.get('*', function (req, res) {
  res.sendfile('dist/index.html')
})

app.listen(port, function () {
  console.log('Example app listening on port 5000!')
})
