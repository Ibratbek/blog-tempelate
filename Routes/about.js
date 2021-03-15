const express = require('express');

const router = express.Router();

router.get('/about',(req,res)=>{
    res.render('about',{
        pageTitle:'About',
        postTitle:'About',
        path:'/about'
    });
});


module.exports = router;