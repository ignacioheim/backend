////* CLASES EN ES6*//// 

// CLASE CONSTRUCTORA
class Persona {
    constructor(nombre, apellido, libros=[], mascotas=[]){
        // propiedades de la clase Persona
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    // propiedades prototipo de Persona
    getFullName() {   
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(mascotas) {
        this.mascotas.push(mascotas)
    }

    getMascotas() {
        console.log(`${this.nombre} tiene: ${this.mascotas.length} mascotas.`)
    }

    addBook(book, autor) {
        this.libros.push({
            nombre: book,
            autor: autor
        })
    }

    getBooks() {
        this.libros.forEach(element => console.log(element.nombre));
    }

}

// INSTANCIA DEL OBJETO PERSONA
let userOne = new Persona("Elon", "Musk")

userOne.addMascota("perro")
userOne.addMascota("gato")
userOne.addBook('El señor de las moscas', 'William Golding')
userOne.addBook('Fundacion', 'Isaac Asimov')


userOne.getMascotas()
userOne.getBooks()
userOne.getFullName()