//Optional chaning 

const objeto = {
    color : "rojo",
    peso : 54,

}
console.log(objeto.tipo?.color)
console.log("todo bien")

//Nullish coalesing operator
const pagina = null ?? 1
console.log(pagina)