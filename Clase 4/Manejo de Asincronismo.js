const miPromesa1 = new Promise((resolve, reject) => {
    let number = Math.random();
    setTimeout(() => number >= 0.8 ? resolve(number) : reject(number)
    , 3000)
    }
)

const miPromesa2 = new Promise((resolve, reject) => {
    let number = Math.random();
    setTimeout(() => number >= 0.8 ? resolve(number) : reject(number)
    , 2000)
    }
)

const miPromesa3 = new Promise((resolve, reject) => {
    let number = Math.random();
    setTimeout(() => number >= 0.8 ? resolve(number) : reject(number)
    , 5000)
    }
)

const miPromesa4 = new Promise((resolve, reject) => {
    let number = Math.random();
    setTimeout(() => number >= 0.8 ? resolve(number) : reject(number)
    , 1000)
    }
)

const miPromesa5 = new Promise((resolve, reject) => {
    let number = Math.random();
    setTimeout(() => number >= 0.2 ? resolve(number) : reject(number)
    , 4000)
    }
)

console.log("Iniciando...")
miPromesa1
    .then(resultado=>console.log(`Ok: ${resultado*100}`))
    .catch(console.log(`Error`))
    .finally(console.log(`El nuevo numero es: ${Math.random()*100}`))
miPromesa2
     .then(resultado=>console.log(`Ok: ${resultado*100}`))
     .catch(resultado=>console.log(`Error`))
     .finally(console.log(`El nuevo numero es: ${Math.random()*100}`))
miPromesa3
     .then(resultado=>console.log(`Ok: ${resultado*100}`))
     .catch(resultado=>console.log(`Error`))
     .finally(console.log(`El nuevo numero es: ${Math.random()*100}`))     
 miPromesa4
     .then(resultado=>console.log(`Ok: ${resultado*100}`))
     .catch(resultado=>console.log(`Error`))
     .finally(console.log(`El nuevo numero es: ${Math.random()*100}`))
miPromesa5
     .then(resultado=>console.log(`Ok: ${resultado*100}`))
     .catch(resultado=>console.log(`Error`))
     .finally(console.log(`El nuevo numero es: ${Math.random()*100}`))


function* miGenerador() {
    let numbers = 0;
    while (numbers <= 5) {
        yield {
            orden: numbers++,
            azar: Math.random()
        }
    }
}

let generador = miGenerador();

const setTIme = setInterval(() => {
    const t = generador.next().value
    console.log(t)
    
    if(t.orden === 5){
        clearInterval(setTIme)
    }
}, 1000)