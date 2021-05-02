const express = require('express')

const router = express.Router()

// Login
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' })
})

router.post('/login', (req, res) => {
    const { email, password } = req
    res.status(201).redirect('/')
})


// SignUp
router.get('/signup', (req, res) => {
    res.render('signup', { title: 'SignUp' })
})

router.post('/signup', (req, res) => {
    console.log(req.body)
    res.status(201).redirect('/')
})


// Logout
router.get('/logout', (req, res) => {
    res.redirect('/login')
})


// Home
router.get('/', (req, res) => {
    res.render('home', { title: 'Home' })
})


// Setting
router.get('/setting', (req, res) => {
    res.render('setting', { title: 'Setting' })
})


// Projects
router.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects' })
})

module.exports = router