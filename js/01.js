//objetos

const personas = {
    nombre : "kevin",
    edad : 34,
    apellido : "meneses"
}

Object.freeze(personas)

//Destructuring

const {nombre, edad, apellido} = personas

console.log(nombre)
console.log(edad)
console.log(apellido)


// Object literal 

const precio = 80
const asistido = true

const producto = {
    precio : precio,
    asistido: asistido
}

Object.freeze(producto)

console.log(producto)

//reescribir un objeto

producto.precio = 40;

//si no existe una propiedad lo añade
producto.oferta = 600
console.log(producto)

//eliminar propiedad

delete producto.asistido
console.log(producto)


//Destructuring de dos objetos

const telefonos = {
    modelo : "pocophone",
    precio : 7000
}

const computadora = {
    modelo : "rtx 7000",
    precio : 10000,
    direccion : {
        calle: "los mangos",
        tipos: {
            tipo: "gamer"
        }
    }
}

const {modelo} = telefonos
const {modelo: marca, direccion: {calle}, direccion: {tipos: {tipo} } } = computadora

console.log(modelo)
console.log(marca)
console.log(calle)
console.log(tipo)

//Unir dos objetos

const cliente = {
    nombre: "mariana",
    edad: 33,
    pocision: "marketing"
}

const caracteristicas = {
    edad: 34,
    habilidad: "liderar",
    ...cliente
}


const nuevoObjeto = {
    ...cliente,
    ...caracteristicas
}

const nuevoObjeto2 = Object.assign(cliente, caracteristicas)
console.log(nuevoObjeto)
console.log(nuevoObjeto2)

console.table(caracteristicas)