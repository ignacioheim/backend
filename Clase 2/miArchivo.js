// Llamo a módulo
const oper = require('./miModulo.js')

// Instancio una clase
let instance = new oper.myClass();


// Opción 1 de promesas con .then y .catch
let myFunc = () => {
    return new Promise((resolve, reject) => 
        setTimeout(() => {
        resolve(instance.operaciones(instance.showNumb1(),instance.showNumb1(),instance.operacion))
        }, 3000))
    }

myFunc()
    .then((item) => console.log(item))
    .catch(err => "Algo salió mal...")

// Opción 2 con async function
async function fetchingData () {
    console.log("Iniciando el programa...");
    const data = await myFunc ();
    console.log(data);
    console.log("Terminó.");
    }
fetchingData ()

