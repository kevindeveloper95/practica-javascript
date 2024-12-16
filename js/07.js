//SELECTORES

/* const h = document.querySelector(".heading")
const l =  document.querySelectorAll(".navegacion a")


h.textContent = "hola me llamo jose"

const inputNombre = document.querySelector("#tecnologias")
inputNombre.value = "un nuevo valor"

console.log(h)
console.log(l)

const heading = document.querySelector(".heading")


const evento = heading.addEventListener("click", () =>  {
   heading.textContent = "todo bien"
}) */

   const l =  document.querySelectorAll(".navegacion a")

   l.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
    e.preventDefault()
    e.target.textContent = "diste click"
    })
   })

   const inputName = document.querySelector("#nombre")

   inputName.addEventListener("input", (e) => {
        console.log(e.target.value)
   })

   const inputPassword = document.querySelector("#password")

   inputPassword.addEventListener("input", functionPassword )


   function functionPassword(){
    inputPassword.type = "text"

    setTimeout(() => {
        inputPassword.type = "password"
    }, 300);
   }

   //SUBMIT
   const formulario = document.querySelector("#formulario")

   formulario.addEventListener("submit", (e) => {
      e.preventDefault()
      const nombre = document.querySelector("#nombre").value
      const password = document.querySelector("#password").value
      
      if (nombre === ""|| password === ""  ) {
        console.log("todos los campos son obligatorios")
    }else{
        console.log("todo bien iniciando sesion")
    }  
    })