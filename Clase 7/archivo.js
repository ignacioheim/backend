import express, { json } from 'express'
import fs from 'fs'

const app = express();
const PORT = 8080;
const server = app.listen(PORT,()=>{
    console.log(`Estoy escuchando desde el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

let visitasUno = 0;
let visitasDos = 0;

app.get('/items', (req,res) => {
    //res.send("Hola mundo!")
    const file = fs.readFileSync('./productos.txt', 'utf-8')
    const item = JSON.parse(file)
    const obj = {
        item: JSON.parse(file),
        cantidad: item.length
    }
    res.json({obj})
    visitasUno++
});

app.get('/item-random', (req,res) => {
    const archivo = fs.readFileSync('./productos.txt', 'utf-8')
    const item = JSON.parse(archivo)
    const randomProduct = Math.round((Math.random() * ((item.length-1) - 0) + 0))
    console.log(randomProduct)
    res.json({item: item[randomProduct]})
    visitasDos++
})

app.get('/visitas', (req,res) => {
    res.json({visitas: {items: visitasUno, item: visitasDos}})
})
