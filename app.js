
const express = require('express')
const app = express()
const path = require("path")

app.get ('/', function (req,res){
    let file = path.resolve('app.html')
    res.sendFile(file);
 })


 app.get ('/register', function (req,res){
  let file = path.resolve('register.html')
  res.sendFile(file);
})


app.get ('/login', function (req,res){
  let file = path.resolve('login.html')
  res.sendFile(file);
})

app.get ('*', function (req,res){
    if (req.url.endsWith ('.css')){
        let file = path.resolve('public/styles' + req.url);
        return res.sendFile(file);
    } 

    let imagenes = ['jpg','jpeg','gif','png','svg'];
    let ext = req.url.split('.')[1];
             if(imagenes.includes(ext)){
               let file = path.resolve ('public/imagenes'+ req.url) 
               return res.sendFile(file) 
             }

})
 
 app.listen(3000)

