const express = require('express')

const app = express()
const mongoose = require('mongoose')
const port = 3000

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})

// middleware for getting for data

app.use(express.urlencoded({extended: true}))

// databse connection
mongoose.connect('mongodb://127.0.0.1:27017/progress-DB')
.then(() => console.log('Database connected successfully'))
.catch(err => console.log(err.message))