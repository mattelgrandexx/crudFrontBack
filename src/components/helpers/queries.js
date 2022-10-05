const URL = process.env.REACT_APP_API_CAFE;

export const consultarApi=async()=>{
    try {
        // peticion get para obtener el arreglo
        const respuesta = await fetch(URL);
        const listaProductos =await respuesta.json()
        return listaProductos;
    } catch (error) {
        console.log(error);
    }
}

