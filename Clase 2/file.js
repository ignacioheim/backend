////////////////////////// MÉTODO 1 //////////////////////////
const myFunntion = (operacion) => {
    return new Promise((resolve, reject) => {
            const modulo = import(`./${operacion}.js`)
            resolve(modulo)
        }
    )
}

myFunntion('suma')
    .then(resp => {
        const sum = new resp.mySum()
        let suma = sum.operaciones(1,3,sum.operacion)
        console.log(suma)
    });

myFunntion('resta')
    .then(resp => {
        const sum = new resp.mySub()
        let suma = sum.operaciones(1,3,sum.operacion)
        console.log(suma)
    });

////////////////////////// MÉTODO 2 //////////////////////////
async function fetchingData (operacion) {
    try {
    const modulo = await import(`./${operacion}.js`)
        return modulo
    } catch (err) {
        console.log(err)
    }
};

fetchingData('suma')
    .then(resp => {
        const sum = new resp.mySum()
        let suma = sum.operaciones(54,3,sum.operacion)
        console.log(suma)
    });

    fetchingData('resta')
    .then(resp => {
        const sub = new resp.mySub();
        let suma = sub.operaciones(23,3,sub.operacion)
        console.log(suma)
    });