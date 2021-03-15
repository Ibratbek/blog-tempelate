const express = require('express');

const router = express.Router();

router.get('/contact',(req,res)=>{
    res.render('contact',{
        pageTitle:'Contact',
        postTitle:'Contact',
        path:'/contact'
    });
});


module.exports = router;