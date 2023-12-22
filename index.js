const express = require('express');
const app = express();
const port = 8081;
app.get("/", (req,res)=>{
  res.send("Hola mundo")
})
app.get("/nueva-ruta", (req,res)=>{
  res.send("hola soy una nueva ruta")
})
app.get("/products",(req,res)=>{
  res.json({
    "celular": "IPhone 5",
    "price": 1000
  })
})
app.listen(port, console.log(`Servidor corriendo en el puerto: ${port}`))
