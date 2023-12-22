const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8081;
app.get("/", (req,res)=>{
  res.send("Hola mundo")
})
app.get("/nueva-ruta", (req,res)=>{
  res.send("hola soy una nueva ruta")
})
app.get("/products",(req,res)=>{
  const {size} = req.query
  console.log(size)
  const limit = size || 10;
  const products = [];

  for(let i = 0; i < limit; i++){
    products.push({
      name:faker.commerce.productName(),
      price:faker.commerce.price()
    })
  }
  res.json(products)


})
app.get( "/products/:id" ,(req,res)=>{
     const {id} = req.params
     res.json({
      id,
      celular: "IPhone 5",
      price: 1000
     })
})
app.get('/categories/:categoryId/products/:productsId',(req,res)=>{
    const {categoryId, productsId} = req.params
    res.json({
      categoryId,
      productsId
    })
})
app.get('/users',(req,res)=>{
  const {limit, offset} = req.query
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send("No hay parametros")
  }
})
app.listen(port, console.log(`Servidor corriendo en el puerto: ${port}`))
