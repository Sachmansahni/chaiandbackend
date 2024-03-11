// console.log("chai aur code")
require('dotenv').config()
// import express from "express"
const express=require('express');
const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.send('hello world!')
})

app.get('/twitter',(req,res)=>{
    res.send('sachman singhs is back ');
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
// isko bnnane prr hmaara app reload nahi ho paayega aoone aaap toh humko ek baar service ko rok krr dubara se run krna padega 

app.get('/chai',(req,res)=>{
    res.send('<h2>chai aur code</h1>')
})

// app.listen(port,()=>{
//     console.log(`example app listening on port ${port}`)
// })
// for resoling the hardcoded portnumber issue, use the .env variables here 

app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port}`)
})
// after this we can say that we are fetching the port number from the enviromnment variables 