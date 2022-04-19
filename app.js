const express = require('express')
const app = express()

app.use(express.static('public'))

// app.get(path, code(object representing request, response that we will send, helps us control application flow))
// app.get(path, code(request, response, next))
// app.get(path, code(req, res, next))

app.get('/about', (req, res) => {
    console.log('a request on the about page was received')
    
    res.sendFile(__dirname + "/views/about.html")
})


app.listen(3000, () => {
    console.log('server listening to requests...')
})

app.get('/contact', (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html')
})
