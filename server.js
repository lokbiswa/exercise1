const express = require('express');
const bodyParser = require('body-parser');
const {readApi}  = require('./readDb')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/', (req, res)=>{ 
  let data = readApi()
  console.log(data)
  res.send(data);
})
app.listen(3000, function() {
  console.log('localhost:3000')
})