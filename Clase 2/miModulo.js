class myClass{
    #numb1 = 3
    #numb2 = 2

    showNumb1 = () => {
        return this.#numb1
    }

    showNumb2 = () => {
        return this.#numb2
    }

    operaciones = (one, two, operacion) => {
        return ("El resultado es: " + operacion(one,two));
    };
    operacion = (one, two) => one+two;
}

module.exports = {myClass}

