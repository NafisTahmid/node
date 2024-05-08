const express = require('express')
const app = express()
const port = 3000

const vegetables = [
  {
    id:1,
    name:"Cabbage",
    color:"Green",
    price:30
  },
  {
    id:2,
    name:"Carrot",
    color:"Red",
    price:50
  },
  {
    id:3,
    name:"Tomato",
    color:"Red",
    price:45
  },
  {
    id:4,
    name:"Potato",
    color:"brown",
    price:40
  },
  {
    id:5,
    name:"Onion",
    color:"Purple",
    price:"90"
  },
  {
    id:6,
    name:"Cucumber",
    color:"Green",
    price:"40"
  }
];

app.get('/vegetables', (req, res) => {
  res.send(vegetables)
})

app.get('/', (req, res) => res.send("Welcome to our vegetable shop!"))

app.get('/vegetables/:id', (req, res) => {
  const id = req.params.id
  const vegetable = vegetables[id]
  res.send(vegetable)
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})