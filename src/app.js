import express from "express";



const app=express();

app.post('/test',(req,res)=>{
    res.send("hello from server");
})


export default app;