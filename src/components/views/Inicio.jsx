import { Container, Row } from "react-bootstrap";
import CardProducto from "./admiProductos/CardProducto";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { consultarApi } from "../helpers/queries";


const Inicio = () => {
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
    <Container className="my-5 mainSection">
      <h1 className="display-3 text-center">Bienvenidos</h1>
      <hr />
      <Row xs={1} md={4} className="g-4">
        {/* aqui van las columnas */}
        {productos.map((producto)=> <CardProducto key={producto.id} producto={producto} setProductos={setProductos} nombreProducto={producto.nombreProducto} precio={producto.precio} imagen={producto.imagen}></CardProducto>)}
        
      </Row>
    </Container>
  );
};

export default Inicio;
