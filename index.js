const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Assalamu-Alaikum Mom! Learning Node Js!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})