import express from 'express';
const app= express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("hello praveen")
});
app.get('/about',(req,res)=>{
    res.send("u r reading me about section ....")
});
app.get('/contact',(req,res)=>{
    res.send("contact me at ....")
});

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});