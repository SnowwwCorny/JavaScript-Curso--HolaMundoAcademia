//personaje
let nombre = "Clara"
let juego = "Honkai start rail"
let edad = 16

let personaje = {
    nombre: "Clara", //par llave-valor o propiedad
    juego: "Honkai Start Rail",
    edad: 16,
} //objeto literal
console.log(personaje) 
console.log(personaje.nombre) // para acceder a propiedad en especifico
console.log(personaje['edad']) //segunda forma

//modificar propiedad
personaje.edad = 13

let llave = 'edad'
personaje['edad'] = 13

//eliminar propiedad
delete personaje.juego

console.log(personaje)