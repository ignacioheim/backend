import modulo from './archivo.js'

import express from 'express'

const app = express();
const PORT = 8080;
const server = app.listen(PORT,()=>{
    console.log(`Estoy escuchando desde el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

let listProducts = modulo.products;
let lengthProductos = modulo.len;

app.get('/api/productos/listar', (req,res) => { 
    if(listProducts.length>0) {
        res.json(listProducts)
    } else {
        res.json({error: 'no hay productos cargados'})
    }
}) 

app.get('/api/productos/listar/:id', (req,res) => {
    let params = req.params;
    //console.log(parseInt(params.id))
    //console.log(listProducts.length)
    if (parseInt(params.id)>0 && parseInt(params.id)<=listProducts.length) {
        let producto = listProducts.filter(function(p){return p.id == parseInt(params.id)});
        res.json({producto})
    } else {
        res.json({error: 'Producto no encontrado'})
    }
}) 

app.post('/api/productos/guardar', (req,res) => {
    let title = req.body.title
    let price = req.body.price
    let thumbnail = req.body.thumbnail
    //console.log(req.body)
    let item = new modulo.Product(title, price,thumbnail)
    item.addProducts()
    item.addId()
    console.log(listProducts)
    res.json(listProducts)
}) 
