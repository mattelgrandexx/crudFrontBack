import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";



const CardProducto = (productos, id) => {


  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src={productos.imagen}
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>{productos.nombreProducto}</Card.Title>
        <Card.Text>{productos.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link className="btn btn-danger me-2" to={`/detalle/${id}`}>Ver más</Link>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
