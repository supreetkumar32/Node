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
    console.log(req.body);             //frontend se data yahan aayega
    users=req.body;
    res.json({
        message:"data received successfully",  //data received successfully postman ke niche print hoga //backend send confirmation that msg has received
        user:req.body                           //postman jo data entry karenge wo iake console mey print hoga req.boody ke help se
    });
});

//update->patch
app.patch('/users',(req,res)=>{
console.log('req.body->',req.body);
//update data in users object
let dataToBeUpdated=req.body;
for(key in dataToBeUpdated){
    users[key]=dataToBeUpdated[key];
}
res.json({
    message:"data updated successfully"
})
});

//to delete a data
app.delete('/users',(req,res)=>{
    users={};
    res.json({
        message:"data has been deleted"
    });
});
