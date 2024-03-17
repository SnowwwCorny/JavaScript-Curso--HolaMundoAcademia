let animales = ['chanchito', 'caballo'] //array literal 
console.log(animales)
console.log(animales[0])//para buscar un elemenrto del array (el indice siempre incicia en 0)

//agregar un nuevo elemento
animales[2] = 'dragon'
console.log(animales)

//!CUIDADO
animales[10] = 'pez' //indice que no haga sentido
console.log(animales) //imprime 7 elementos vacios
console.log(animales[7]) //imprime undefine
console.log(typeof animales) //devuelve un objecto

console.log(animales.length)//imprime la longitud del array