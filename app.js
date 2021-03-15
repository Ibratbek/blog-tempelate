const express = require("express");
const bodyParser = require('body-parser');
const { static } = require("express");
var _ = require('lodash');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

const aboutRoute = require('./Routes/about');
const contactRoute = require('./Routes/contact');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(aboutRoute);
app.use(contactRoute);


const posts = [];

app.get('/',(req,res)=>{

    const date = new Date();
    const time= date.getHours();
    const minute = date.getMinutes();

    res.render('index',{
        pageTitle:'Home page',
        time:time+":"+minute,
        posts:posts,
        path:'/'
    });
});

app.get('/admin/add-post',(req,res)=>{
    res.render('admin/add-post',{
        pageTitle:'Add-post',
        path:'/admin/add-post'
    });
});

app.post('/admin/add-post',(req,res)=>{
    
    const post = {
        title: req.body.title,
        content: req.body.content
    }

    posts.push(post);

    res.redirect('/');
});

app.get('/posts/:postName',(req,res)=>{
    const requestedTitle = _.lowerCase(req.params.postName);

    posts.forEach(function(post){
        const storedTitle = _.lowerCase(post.title);

        if(requestedTitle==storedTitle){
            res.render('post',{
                pageTitle:post.title,
                title:post.title,
                content:post.content
            });
        } else {
            console.log("Topilmadi!");
        }
    });
});



app.listen(3000,(req,res)=>{
    console.log("Server ishlashni boshladi");
});