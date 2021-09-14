const fs = require('fs');
const { inflateRaw } = require('zlib');

const products = [];

class Archivo {

    constructor(name) {
        this.name = "./productos.txt"
    }

    leer = (data) => {
        return fs.promises.readFile(`${data}`, 'utf-8')
    }

    guardar = (name, info) => {
        return fs.promises.appendFile(this.name, info)
        
    }

    borrar = () => {
        return fs.promises.unlink(this.name)
    }
}

const data = new Archivo()

// async function myFunction () {
//     try {
//         let product = {
//             title: "Auto",
//             price: 120,
//             thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
//         }
//         //const readFile = await data.leer(data.name)   
//         const writeFile = await data.guardar(data.name, JSON.stringify(product, null, '\t'))
        
//         console.log("Archivo guardado con éxito.")
//     }
//     catch (err) {
//         console.log("Error en guardar.")
//     }
// }

// //myFunction()

// const read = fs.readFileSync('./productos.txt', 'utf-8')
// const item = JSON.parse(read)
// console.log(item.length)

// async function readFunc () {
//     try {
//         const read = await data.leer(data.name)
//         console.log(read)
//         const item = JSON.parse(read)
//         console.log(item)
//         let len = item.length
//         console.log(len)
//     }
//     catch (err) {
//         console.log("No se puede leer.")
//     }
// }
// readFunc()



async function myFunction () {
    try {
        const readFile = await data.leer(data.name)    
        const item = JSON.parse(readFile)
        // let len = item.length
        // item.forEach((data, len)=>{
        //     data.id = len + 1;
        // })           
        console.log(item)
//    const writeFile = await data.guardar(data.name, JSON.stringify(item, null, '\t'))
   // const deleteFile = await data.borrar(data.name)
    } catch (e) {
        console.log(products)
        console.log("El archivo no existe")
    }
}

myFunction();

async function myFunc () {
    try {
        let product = {
            title: "Regla",
            price: 100,
            thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
        }
        products.push(product);
        const writeFile = await data.guardar(data.name, JSON.stringify(product, null, '\t'))
        
        console.log("Archivo guardado con éxito.")
    }
    catch (err) {
        console.log("Error en guardar.")
    }
}

//myFunc();
