//Fetch Api con promesas

const Api = "https://jsonplaceholder.typicode.com/comments"


/*  fetch(Api)
.then((respond) => {
console.log(respond)
return respond.json()
})
 .then((data) => {
    const {name, email} = data[0]
console.log(name, email)
})   */

//Performace y multiple async y await
 const consumirApi = async () => {
    try {
        const inicio = performance.now()

        const response = await fetch(Api)
        if (!response.ok) {
            throw new Error("hubo un error");
            
        }
        const data = await response.json()
        console.log(data)

        const fin = performance.now()
        console.log(inicio - fin)
    } catch (error) {
        console.log(error.message)
    }
}

consumirApi() 


const consumirApi2 = async () => {
    try {
        const inicio = performance.now()

        const [respond] = await Promise.all(fetch(Api))
        const [data] = await Promise.all(respond.json())


        /* const response = await fetch(Api) */
        if (!response.ok) {
            throw new Error("hubo un error");
            
        }
        /* const data = await response.json() */
        console.log(data)

        const fin = performance.now()
        console.log(inicio - fin)
    } catch (error) {
        console.log(error.message)
    }
}

consumirApi2() 