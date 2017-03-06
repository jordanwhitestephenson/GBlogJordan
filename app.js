const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')
const blogFile = require('./routes/blogroute')
const userFile = require('./routes/userroute')
const commentFile = require('./routes/commentroute')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/blogroute', blogFile)
app.use('/userroute', userFile)
app.use('/commentroute', commentFile)

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})