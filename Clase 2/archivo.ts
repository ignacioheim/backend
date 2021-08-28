class myClass {
    #numb1: number = 3
    #numb2: number = 2

    showNumb1 = () => {
        return this.#numb1
    }

    showNumb2 = () => {
        return this.#numb2
    }

    operaciones = (one: number, two: number, operacion) => {
        console.log("El resultado es: " + operacion(one,two));
    };
    operacion = (one: number, two: number) => one+two;
}

module.exports = {myClass}
