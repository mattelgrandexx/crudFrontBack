const URL = process.env.REACT_APP_API_CAFE;
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

// PETICION POST
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

export const editarProductoAPI=async(producto)=>{
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

