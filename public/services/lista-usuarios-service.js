

//Fech api
const listaUsuarios = () => 
    fetch("http://localhost:3000/usuarios").then(respuesta =>respuesta.json());

const crearUsuario = (email, password) =>{
    return fetch("http://localhost:3000/usuarios",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email,password,id:uuid.v4()})  
    })
}

export const clientServices = {
    listaUsuarios,
    crearUsuario
}
