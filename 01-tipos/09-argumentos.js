function suma(a, b) /*paramentros*/ {
    console.log(arguments) //acede a los valores que se le estan pasando a la funcion
    return a + b //calcula el valor de la derecha y lo asigna a una variable de la izquierda
}
let resultado = suma(5, 6, 1, 2, 3) //argumentos
console.log(resultado)
console.log(typeof suma) //tipo funcion