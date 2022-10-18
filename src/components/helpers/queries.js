const URL = process.env.REACT_APP_API_CAFE;
// peticion GET para obtener el arreglo de productos o un producto
// peticion POST para crear un producto (generalmente en formato JSON), tambien se usa en el login
// peticion PUT para modificar un producto
// peticion DELETE para borrar un producto


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

