

// example.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema


mongoose
    .connect('mongodb://localhost/ironborn-ecommerce')
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        min: 1,
    },
    hasStock: {
        type: Boolean,
        default: true,
    },
    categories: [String],
    tags: {
        type: [String],
        enum: ['spirits', 'british', 'polish', 'strong', 'spanish', 'mexican']
    },
    imgSrc: {
        type: String,
        default: "via.placeholder.com/700x400",
    },
    stores: {
        type: [String],
        enum: ['online', 'Amsterdam', 'Brighton', 'Berlin']
    }
})

const Product = mongoose.model('Product', productSchema)

Product.create({
    name: "Gin",
    price: 28,
    categories: ['boutique'],
    tags: ['strong', 'british'],
    stores: ['online', 'Brighton']
})
    .then(product => console.log('A new product was created', product))
    .catch(error => console.log('Error creating a product in DB', error))

Product.updateMany({categories: "fiery"}, {price: 35})
    .then(() => {
        console.log('success')
    })
    .catch(err => console.error('Error connecting to mongo', err))

Product.find({price: {$gt: 30}})
    .then((product) => {
        console.log('the products with prices above 30 are: ', product)

    })
    .catch(err => console.error('error getting products from DB', err))

Product.findByIdAndUpdate("62613575fc316735549bd77e", {price: 38, stores: ['online']})
    .then((product) =>{
        console.log(product)
    })

// Product.deleteOne({name: 'Gin'})
//     .then(()=> console.log('succes'))
//     .catch((err)=>console.log('there was an error', err))


/* npm, moongoose, express 