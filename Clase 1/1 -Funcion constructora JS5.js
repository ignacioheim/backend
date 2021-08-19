////* CLASES EN JS5 *//// 

// FUNCION CONSTRUCTORA
function Persona(nombre,apellido,libros=[], mascotas=[]) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
}
// PROPIEDADES
Persona.prototype.getFullName = function() {
    console.log(`${this.nombre} ${this.apellido}`);
}

Persona.prototype.addMascota = function(mascota) {
    this.mascotas.push(mascota)
}

Persona.prototype.getMascotas = function() {
    console.log(this.mascotas.length)
}
Persona.prototype.addBook = function(book, autor) {
    this.libros.push({
        nombre: book,
        autor: autor
    })
}
Persona.prototype.getBooks = function() {
    this.libros.forEach(element => console.log(element.nombre));
}

// INSTANCIA DE LA FUNCION CONSTRUCTORA
let userOne = new Persona("Elon", "Musk")

userOne.getFullName()
userOne.addMascota("perro")
userOne.addMascota("gato")
userOne.getMascotas()
userOne.addBook("1984", "Orson Welles")
userOne.addBook("Cien Años de Soledad", "Gabriel García Márquez")
userOne.getBooks()

//console.log(userOne)

