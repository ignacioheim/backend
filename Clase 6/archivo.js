const fs = require('fs');

class Archivo {

    constructor(name) {
        this.name = "./productos.txt"
    }

    leer = (data) => {
        return fs.promises.readFile(`${data}`, 'utf-8')
    }

    guardar = (name, info) => {
        return fs.promises.writeFile(this.name, info, (error) => {
            if(error) {
                console.log("El archivo no se guardó"+ error)
            } else {
                console.log("Archivo guardo con éxito.")
            }
        } )
    }

    borrar = () => {
        return fs.promises.unlink(this.name)
    }
}

const data = new Archivo()
//console.log(data.name)

async function myFunction () {
    try {
        const readFile = await data.leer(data.name)    
        //console.log(typeof contenido)
        const item = JSON.parse(readFile)
        let counter = item.length
        item.forEach(element => {
            element.id = counter++                        
        });

    const writeFile = await data.guardar(data.name, JSON.stringify(item, null, '\t'))
   // const deleteFile = await data.borrar(data.name)
    } catch (e) {
        console.log("El archivo no existe", e)
    }
}

myFunction();