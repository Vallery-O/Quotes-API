const express = require ('express');
const app = express();

const quotes =[
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not final; failure is not fatal: It is the courage to continue that counts."
];

app.listen(3000, ()=>{

    app.get('/',(req, res)=>{
        res.send('Welcome to the homepage Cutiee!!');
    });
    app.get('/quotes',(req, res)=>{
        res.send('Welcome to the about page Cutiee!!');
    });
    app.get('/quote',(req, res)=>{
        res.send('Welcome to the about page Cutiee!!');
    });
    
})