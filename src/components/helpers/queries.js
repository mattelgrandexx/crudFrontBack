const URL = process.env.REACT_APP_API_CAFE;
const URL2 = process.env.REACT_APP_API_CAFE_2;
// peticion GET para obtener el arreglo de productos o un producto
// peticion POST para crear un producto (generalmente en formato JSON), tambien se usa en el login
// peticion PUT para modificar un producto
// peticion DELETE para borrar un producto

// PETICION GET
export const consultarApi=async()=>{
    try {
        const respuesta = await fetch(URL);
        const listaProductos =await respuesta.json()
        return listaProductos;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// PETICION POST PARA DAR DE ALTA PRODUCTOS
export const crearProductoAPI=async(producto)=>{
    try {
        const respuesta = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}
// peticion POST para crear Usuario
export const crearUsuarioAPI=async(datosUsuario)=>{
    try {
        const respuesta = await fetch(URL2,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(datosUsuario)
        });
        console.log(URL2);
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}


// PETICION PUT
export const editarProductoAPI=async(id, producto)=>{
    try {
        const respuesta = await fetch(URL+"/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// PETICION DELETE
export const borrarProductoAPI=async(id)=>{
    try {
        const respuesta = await fetch(URL+"/"+id,{
            method:"DELETE",
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// peticion GET para obtener producto
export const obtenerProductoAPI=async(id)=>{
    try {
        const respuesta = await fetch(URL+"/"+id);
        const producto={
            dato:await respuesta.json(),
            status: respuesta.status
        }
        return producto;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// crear usuario
export const consultarUsuarioAPI = async()=>{
    try {
        const respuesta = await fetch(URL2);
        const listaUsuarios = await respuesta.json();
        return listaUsuarios;
    } catch (error) {
        console.log(error);
        return false;
        
    }
}

// login


