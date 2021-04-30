const express = require('express')
const router = express.Router()

router.get('/signup', (req, res) => {
    res.render('signup', { title: 'SignUp' })
})

module.exports = router