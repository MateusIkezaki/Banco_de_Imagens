require('dotenv').config()
const express = require('express')
const app = express()
const dataStore = require('nedb')
const dataBase = new dataStore('database.db')

dataBase.loadDatabase()
const port = process.env.PORT || 1500

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})

app.use(express.static('public'))
app.use(express.json({limit: '900mb'}))

///////////////// POST METHOD //////////////////

app.post('/images', (req, res) => {
    dataBase.insert(req.body)
    res.json(req.body)
    console.log("Image Saved Successfully")
})


//////////////// GET METHOD ///////////////////

app.get('/images', (req, res) => {
    dataBase.find({}, (err, data) => {
        if(err){
            res.end()
            return
        }

        res.json(data)
    })
})