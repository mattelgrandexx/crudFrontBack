import { Button, Table } from "react-bootstrap";
import { consultarApi } from "../helpers/queries";
import ItemProducto from "./admiProductos/ItemProducto";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Administrador = () => {
const [productos, setProductos] = useState([])

  useEffect(() => {
     consultarApi().then((respuesta)=>{
      setProductos(respuesta);
    },
    (reason) => {
      console.log(reason);
      Swal.fire(
        'Ocurrio un error',
        'Intentar en unos minutos',
        'error'
      )
      
    }
    )

  }, [])
  

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link to="/administrar/crear" className="btn btn-primary">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {/* aqui tengo que hacer un map */}
          {
            productos.map((producto)=><ItemProducto key={producto.id} producto={producto}></ItemProducto>)
          }
          
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
