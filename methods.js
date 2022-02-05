const express=require('express');
const app=express();
//middleware
app.use(express.json());
let users={};
app.listen(3000);

app.get('/users',(req,res)=>{
    res.send(users);
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    users=req.body;                         //last mey jo visual ke console mey print karne ke liye 
    res.json({
        message:"data received successfully",  //data received successfully postman ke niche print hoga
        user:req.body                           //postman jo data entry karenge wo iske console mey print hoga req.body ke help se
    });
});
