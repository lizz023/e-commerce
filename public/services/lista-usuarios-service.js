
//Fech api
const listaUsuarios = () => 
    fetch("http://localhost:3000/usuarios").then(respuesta =>respuesta.json());

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
    crearUsuario,
    listaUsuarios,
    VerificarUsuario
}
