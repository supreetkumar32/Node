const express=require('express');
const app=express();
app.listen(3000);

// app.get('/',function(req,res){
//     res.send('Hello World')
// });

// app.get('/about',function(req,res){
//     res.send('About Page')
// });

app.get('/',function(req,res){
    res.sendFile('C:/Users/supre/Desktop/nodelast/views/index.html')
});

app.get('/about',function(req,res){
    res.sendFile('./views/about.html',{root:__dirname});
});

///redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

//404 page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});
})
