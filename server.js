var express = require('express')
// var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(__dirname + '/dist')) // eslint-disable-line
var port = process.env.PORT || 5000
app.set(port)
app.listen(port)
console.log('server started ' + port)
