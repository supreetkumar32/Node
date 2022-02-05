const express=require('express');
const app=express();
app.listen(3000);
app.get('/',function(req,res){
    res.send('Hello World')
});

app.get('/about',function(req,res){
    res.send('About Page')
});
