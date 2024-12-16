//Arreglos

const nombres = ["kevin", "alito", "karen", "rocio", ]

//Añadir al arreglo
/*  const añadiraArreglo = ["julia", ...nombres, "alejandro"]

console.log(añadiraArreglo)  */

//Eliminar elemento de arreglo

/* const eliminarElemento = nombres.filter(function (tech) {
if (tech !== "rocio") {
    return tech
}
}) 

const eliminarElementoDos = nombres.map(function (tech) {
    if (tech === "kevin") {
        return "javier"
    }else{
       return tech
    }
    }) 
 console.log(eliminarElemento) 
 console.log(eliminarElementoDos ) 

const karen = nombres[2]
console.log(karen) */
//Destructuring de arreglos

/* const [,alito, rocio] = nombres

console.log(alito) */


//Recorrer arrays
const apellidos = ["meneses", "parga", "lopez", "sanchez", ]

/* for (let index = 0; index < apellidos.length; index++) {
   console.log(apellidos[index])
    
} */

apellidos.forEach(function(ap) {
console.log(ap)
})

apellidos.map(function(ape){
console.log(ape)
})

const numeros = [10, 20, 30, 40]

//INCLUDE devuelve si el elemento existe
const saberSiExiste = apellidos.includes("meneses")
console.log(saberSiExiste)

//SOME Devuelve si almenos alguno cumple la condicion
const cumCon = numeros.some(a => a > 10)
console.log(cumCon)

//FIND devuelve el primer elemento que cumpla la condicion
const cumplaCondicion = numeros.find(nom => nom > 20)
console.log(cumplaCondicion)

//EVERY retorna true o false si todos cumplen la condicion
const siTodosCumplen = numeros.every(b => b > 20)
console.log(siTodosCumplen)

//Retorna lo acumulado del total
const total = numeros.reduce((total, numero) => total + numero, 0)
console.log(total)