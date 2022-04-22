const mongoose = require('mongoose')

const Product = require("../models/Product.models")

mongoose
    .connect('mongodb://localhost/ironborn-ecommerce')
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));


const products = [
    {
            title: "Vodka",
            price: '20',
            imgSrc: "vodka.jpeg",
            stores: ['Online', 'Amsterdam', 'Berlin'],
        },
    {
            title: "Brighton Gin",
            price: 30,
            imgSrc: "brighton-gin.jpeg",
        },
 {
            title: "Jack Daniels Whisky",
            price: 25,
            imgSrc: 'whisky.jpeg',
            stores: ['Online', 'Amsterdam'],
        }
]

Product.insertMany(products)
    .then( response => {
        console.log(response.length, "products created")
    })
    .catch((error)=>{
        console.log("error bitch", error)
    })
