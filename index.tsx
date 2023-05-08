const express = require('express')

//create an express app
const app = express()

//define default endpoint
app.get('/', (req, res) => {
  res.send({
    "message": "Automate all the things!",
    "timestamp": Date.now()
  })
})

//expose app listen on PORT
const PORT = process.env.PORT || 3000

//create a server object
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
