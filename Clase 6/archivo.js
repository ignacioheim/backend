const fs = require('fs');

class Archivo {

    constructor(name) {
        this.name = "./productos.txt"
    }

    leer = (data) => {
        return fs.promises.readFile(`${data}`, 'utf-8')
    }

    guardar = (data, info) => {
        return fs.promises.writeFile(data, info)
    }

    borrar = () => {
        return fs.promises.unlink(name, error)
    }
}

const data = new Archivo()

async function myFunction () {
    try {
        const contenido =  await data.leer('./lista.txt')    
        console.log(contenido.title)
        console.log(info)
        await data.guardar(data.name, JSON.stringify(info, null, '\t'))
    } catch (e) {
        console.log("El archivo no existe")
    }
}

myFunction();