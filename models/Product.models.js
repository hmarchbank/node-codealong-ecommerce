const mongoose = require('mongoose');
const Schema = mongoose.Schema




mongoose
    .connect('mongodb://localhost/ironborn-ecommerce')
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

const productSchema = new Schema({
    title: {
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
        default: "default.jpeg",
    },
    stores: {
        type: [String],
        enum: ['Online', 'Amsterdam', 'Brighton', 'Berlin']
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product