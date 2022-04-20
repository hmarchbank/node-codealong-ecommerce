const express = require('express')
const app = express()

app.use(express.static('public'))

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


// app.get(path, code(object representing request, response that we will send, helps us control application flow))
// app.get(path, code(request, response, next))
// app.get(path, code(req, res, next))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})





app.get('/vodka', (req, res) => {

    // res.sendFile(__dirname + '/views/product-vodka.html')
    // res.render("view", info)
    const data = {
        title: "Vodka",
        price: '20',
        imgFile: "vodka.jpeg",
        stores: ['Online ', 'Amsterdam ', 'Berlin ', 'Paris '],
    }
    res.render("product", data)
})

app.get('/gin', (req, res) => {
    const data = {
        title: "Brighton Gin",
        price: 30,
        imgFile: "brighton-gin.jpeg",
    } 
    res.render('product', data)
})

app.get('/whisky', (req, res) => {
    const data = {
        title: "Jack Daniels Whisky",
        price: 25,
        // imgFile: 'whisky.jpeg',
        stores: ['Online', 'Amsterdam', 'Berlin', 'Madrid'],

    }

    res.render('product', data)
})


app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get('/contact', (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html')
})

app.listen(3000, () => {
    console.log('server listening to requests...')
})