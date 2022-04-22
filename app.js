const express = require('express');
const { default: mongoose } = require('mongoose');
const Product = require('./models/Product.models');
const app = express()
const drinks = require("./bin/seeds.js")


app.use(express.static('public'))

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get('/', (req, res) => {
   
    res.render("home.hbs")
})

// app.get('/vodka', (req, res) => {
//     Product.findOne({title: 'Vodka'})
//     .then( (productDetails) => {
//     res.render("product", productDetails)
//     })
//     .catch( (err) =>{
//         console.log(err)
//     })
// })

// app.get('/gin', (req, res) => {
//     Product.findOne({title: 'Brighton Gin'})
//     .then( (productDetails) => {
//     res.render("product", productDetails)
//     })
//     .catch( (err) =>{
//         console.log(err)
//     })
// })

// app.get('/whisky', (req, res) => {
//     Product.findOne({title: 'Jack Daniels Whisky'})
//     .then( (productDetails) => {
//     res.render("product", productDetails)
//     })
//     .catch( (err) =>{
//         console.log(err)
//     })
// })
app.get("/products/:productId", (req, res, next) => {
    Product.findById({_id: req.params.productId})
    .then( (productDetails) => {
        res.render("product", productDetails)
    })
    .catch( (err) =>{
        console.log(err)
    })
})

app.get('/about', (req, res) => {
    res.render("about.hbs")
})

app.get('/contact', (req, res, next) => {
    res.render("contact.hbs")
})

app.listen(3000, () => {
    console.log('server listening to requests...')
})