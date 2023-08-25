
//Fech api
const listaUsuarios = () => 
    fetch("https://64e776dfb0fd9648b78ffd5c.mockapi.io/usuarios").then(respuesta =>respuesta.json());

const VerificarUsuario = (email, password) =>{
    return listaUsuarios().then(users => {
        return new Promise((resolve, reject) => {
            if(!users.some(user => user.email === email && user.password === password)) {
                reject(`Usuario o contraseña incorrectos`);
            } else{
                resolve("Bienvenido");
            }
        });
    });
}
    
const crearUsuario = (email, password) =>{
    return listaUsuarios().then(users => {
        return new Promise((resolve, reject) => {
            if(users.some(user => user.email === email)) {
                reject(`El usuario ${email} ya se encuentra registrado`);
            } else{
                resolve(fetch("https://64e776dfb0fd9648b78ffd5c.mockapi.io/usuarios",{
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
    crearUsuario,
    listaUsuarios,
    VerificarUsuario
}
