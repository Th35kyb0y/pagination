const express= require("express")
const cors = require("cors")
const products = require("./products.json")
const app = express()
const path = require("path");
const port=5000
// for default data and page no 
let productToShowEachPage=4
let currentPage=1
app.use(cors())
app.use(express.json())
// rendering the frontend build 
app.use( express.static(path.join(__dirname,'/frontend/build')))
// whatever the url , /url , it will redirect to index.html of reactjs
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend/build","index.html"))
})
app.get("/products",(req,res)=>{

let {limit,page}= req.query
// update these with client side
productToShowEachPage=limit
currentPage=page
// pagination logic =
//this line calculate the where to start displaying product by current page eg. if user is on page 2 then multiply by 10 = 20
// start showing product from 20 if user is on 2nd page 
const indexOfLastProduct = currentPage * productToShowEachPage;
  
// this line calculate previous product, if user is now on page 2 then 20-10=10 , means start extracting product from index 10 

const indexOfFirstProduct = indexOfLastProduct - productToShowEachPage;
// this line extract product to show on current page if user is on page 3 then start from 20th index to 30 
const currentProducts = products.products.slice(indexOfFirstProduct, indexOfLastProduct);
console.log(currentProducts)
res.status(200).send({currentProducts})
})
app.listen(port,()=>console.log(`server running at${port}`))