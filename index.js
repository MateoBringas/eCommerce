const express = require('express')
const app = express()
const port = 3000

const products = [
    {
        id:0,
        name: "Mate",
        price: 1000,
        image: "./images/Cuencos2.jpg",
        stock: 100,
    },
    {
        id:1,
        name: "Mate",
        price: 1000,
        image: "./images/Cuencos2.jpg",
        stock: 100,
    },
    {
        id:2,
        name: "Mate",
        price: 1000,
        image: "./images/Cuencos2.jpg",
        stock: 100,
    },
]

const promociones = [
    {
        id:0,
        name: "Mate",
        price: 1000,
        image: "./images/Cuencos2.jpg",
        stock: 100,
    },
    {
        id:1,
        name: "Mate",
        price: 1000,
        image: "./images/Cuencos2.jpg",
        stock: 100,
    },
    {
        id:2,
        name: "Mate",
        price: 1000,
        image: "./images/Cuencos2.jpg",
        stock: 100,
    },
]

app.get('/api/products', (req, res) => {
  res.send(products)
  res.send(promociones)
})

app.use("/", express.static("front"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})