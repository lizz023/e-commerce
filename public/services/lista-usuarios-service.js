
//Fech api
const listaUsuarios = () => 
    fetch("http://localhost:3000/usuarios").then(respuesta =>respuesta.json());

const crearUsuario = (email, password) =>{
    return listaUsuarios().then(users => {
        return new Promise((resolve, reject) => {
            if(users.some(user => user.email === email)) {
                reject("usuario ya existe");
            } else{
                resolve(fetch("http://localhost:3000/usuarios",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({email,password,id:uuid.v4()})
                }));
            }
        });
    });
}


export const clientServices = {
    listaUsuarios,
    crearUsuario
}
