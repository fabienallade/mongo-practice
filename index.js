const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000

const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/f2i-commerce');
    console.log('DATABASE CONNECTED!')
}

const router = require('./src/routes/articleRoute')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Fabien in the place')
})

app.use('/articles', router)


app.listen(port, ()=> console.log('listening on port '+port))
