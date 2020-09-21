var express = require('express')
var app = express()


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
// respond with "hello world" when a GET request is made to the homepage
app.get('/contact', function (req, res) {
  res.send('contact page!')
})

app.listen(3000)
