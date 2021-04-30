const path = require('path')
const express = require('express')
const hbs = require('hbs')

const aboutRouter = require('./routes/about')
const homeRouter = require('./routes/home')
const loginRouter = require('./routes/login')
const projectsRouter = require('./routes/projects')
const signupRouter = require('./routes/signup')

const app = express()
const port = process.env.PORT

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.static(publicPath))
express.use(express.json())

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(aboutRouter)
app.use(homeRouter)
app.use(loginRouter)
app.use(projectsRouter)
app.use(signupRouter)


app.listen(port, () => {
    console.log(`Server listening at port:- ${port}`)
})