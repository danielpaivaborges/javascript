const express = require("express")
const router = express.Router()


router.get('/articles', (req, res)=>{
    res.send('artigos')
})

router.get('/admin/articles/new', (req, res)=>{
    res.send('criar novo artigo')
})

module.exports = router