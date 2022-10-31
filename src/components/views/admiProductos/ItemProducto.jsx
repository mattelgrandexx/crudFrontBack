
import { Button } from "react-bootstrap";
import { borrarProductoAPI, consultarApi } from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ItemProducto = ({producto, setProductos}) => {
const{_id, nombreProducto, categoria, imagen, precio} = {...producto}
const borrarProducto = ()=>{
  borrarProductoAPI(_id).then((respuesta)=>{
  if(respuesta.status === 200){
    // se pudo borrar el producto
    Swal.fire("Producto eliminado", "El producto fue eliminado exitosamente", "success");
    // obtener todos los productos actuales y actualizamos el state productos
    consultarApi().then((respuesta)=>{
      setProductos(respuesta);
    })
  }else{
    // mostrar mensaje de error
    Swal.fire("Ocurrio un error", "Vuelva a intentar en unos minutos", "error");
  }
  })
}

  return (
    <tr>
      <td>{_id}</td>
      {/* <td>{props.producto.nombreProducto}</td> */}
      <td>{nombreProducto}</td>
      <td>${precio}</td>
      <td>{imagen}</td>
  <td>{categoria}</td>
  <td>
        <Link className="btn btn-warning" to={`/administrar/editar/${_id}`}>
          Editar
        </Link>
        <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
