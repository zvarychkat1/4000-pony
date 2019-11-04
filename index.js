const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/pony', function (req, res) {
    res.sendFile(`${__dirname}/public/index.html`)
  })
 
app.listen(4000, '0.0.0.0', ()=>{
    console.warn('Server express start at http://0.0.0.0:4000/')
})