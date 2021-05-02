const path = require('path')
const express = require('express')
const hbs = require('hbs')

const siteRouter = require('./routes/siteRouter')


const app = express()
const port = process.env.PORT


const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.use(express.static(publicPath))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(siteRouter)

app.listen(port, () => {
    console.log(`Server listening at port:- ${port}`)
})
